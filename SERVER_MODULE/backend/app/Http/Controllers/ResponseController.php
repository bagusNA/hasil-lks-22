<?php

namespace App\Http\Controllers;

use App\Models\Form;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ResponseController extends Controller
{
    public function create(Request $request, Form $form) {
        $validator = Validator::make($request->all() , [
           'answers' => 'array',
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

        if (!$allowedDomain) {
        }

        return response()->json([
            'sdf' => $allowedDomain
        ]);
    }
}
