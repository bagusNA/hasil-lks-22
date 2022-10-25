<?php

namespace App\Http\Controllers;

use App\Models\Form;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class QuestionController extends Controller
{
    public function create(Request $request, Form $form) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'choice_type' => [
                'required',
            ]
        ]);
    }
}
