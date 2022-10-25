<?php

namespace App\Http\Controllers;

use App\Models\Form;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Laravel\Sanctum\PersonalAccessToken;

class FormController extends Controller
{
    public function create(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'slug' => [
                'required',
                'unique:\App\Models\Form,slug',
                'alpha_dash',
            ],
            'allowed_domains' => 'array'
        ]);

        if ($validator->fails())
            return $this->invalidRes($validator->errors());

        $data = $validator->getData();
        $user = $request->user();

        $form = Form::create([
            'name' => $data['name'],
            'slug' => $data['slug'],
            'description' => $data['description'],
            'limit_one_response' => $data['limit_one_response'],
            'allowed_domains' => $data['allowed_domains'],
            'creator_id' => $user->id,
        ]);

        return $this->successRes([
            'message' => 'Create form success!',
            'form' => $form
        ]);
    }

    public function show(Request $request) {
        $forms = Form::where('creator_id', $request->user()->id)->get();

        return $this->successRes([
           'message' => 'Get all forms success',
           'forms' => $forms
        ]);
    }

    public function detail(Request $request, Form $form) {
        if ($form->creator_id !== $request->user()->id)
            return $this->forbiddenRes();

        $form->load('questions');

        return $this->successRes([
            'message' => 'Get form success!',
            'form' => $form
        ]);
    }
}
