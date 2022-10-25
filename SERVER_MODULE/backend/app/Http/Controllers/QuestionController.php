<?php

namespace App\Http\Controllers;

use App\Models\Form;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class QuestionController extends Controller
{
    public function create(Request $request, Form $form) {
        if ($form->creator_id !== $request->user()->id)
            return $this->forbiddenRes();

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'choice_type' => [
                'required',
                Rule::in([
                    'short answer',
                    'paragraph',
                    'date',
                    'multiple choice',
                    'dropdown',
                    'checkboxes'
                ]),
            ],
            'choices' => Rule::requiredIf(function () use ($request) {
                return (
                    $request->input('choice_type') === 'multiple choice' ||
                    $request->input('choice_type') === 'dropdown' ||
                    $request->input('choice_type') === 'checkboxes'
                );
            })
        ]);

        if ($validator->fails())
            return $this->invalidRes($validator->errors());

        $data = $validator->getData();

        $data['choices'] = implode(',', $data['choices']);

        $question = Question::create([
           'form_id' => $form->id,
            'name' => $data['name'],
            'choice_type' => $data['choice_type'],
            'choices' => $data['choices'],
            'is_required' => $data['is_required']
        ]);

        return $this->successRes([
            'message' => 'Add question success',
            'question' => $question
        ]);
    }

    public function delete(Request $request, Form $form, Question $question) {
        if ($form->creator_id !== $request->user()->id)
            return $this->forbiddenRes();

        $question->delete();

        return $this->successRes([
           'message' => 'Remove question success!'
        ]);
    }
}
