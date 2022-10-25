<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Form;
use App\Models\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\Validator;

class ResponseController extends Controller
{
    public function create(Request $request, Form $form) {
        $validator = Validator::make($request->all() , [
           'answers' => 'array:question_id,value',
        ]);

        if ($validator->fails())
            return $this->invalidRes($validator->errors());

        $data = $validator->getData();

        $userDomain = explode('@', $request->user()->email);
        $domains = $form->domains;
        $allowedDomain = false;
        foreach ($domains as $domain) {
            if ($userDomain[1] === $domain) {
                $allowedDomain = true;
                break;
            }
        }

        if (!$allowedDomain)
            $this->forbiddenRes();

        $response = Response::create([
            'form_id' => $form->id,
            'user_id' => $request->user()->id,
            'date' => Date::now()->toDateString()
        ]);

        foreach($data['answers'] as $answer) {
            Answer::create([
                'response_id' => $response->id,
                'question_id' => $answer['question_id'],
                'value' => $answer['value']
            ]);
        }

        return response()->json([
            'message' => "Submit response success!"
        ]);
    }

    public function show(Request $request, Form $form) {
        if ($form->creator_id !== $request->user()->id)
            return $this->forbiddenRes();

        $responses = $form->responses->load(['user', 'answers']);

        $answers = [];
        foreach ($responses as $response) {
            foreach ($response->answers as $key => $answer) {
                $answers[$key] = $answer->value;
            }
        }
        $responses = $responses->toArray();
        $responses['answers'] = $answers;

        return $this->successRes([
            'message' => 'Get responses success',
            'responses' => $responses
        ]);
    }
}
