<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    public function login(Request $request) {
        $validated = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:5'
        ]);

        if ($validated->fails()) {
            return response()->json([
                'message' => 'Invalid field',
                'error' => $validated->errors()
            ], 422);
        }

        $credentials = $validated->getData();

        if (!Auth::attempt($credentials))
            return $this->unauthRes('Email or password incorrect');

        $user = Auth::user();

        $token = $user->createToken('accessToken');
        $user->accessToken = $token->plainTextToken;

        return $this->successRes([
            'message' => 'Login success!',
            'user' => $user
        ]);
    }

    public function logout(Request $request) {
        $token = PersonalAccessToken::findToken($request->bearerToken());

        if (!$token)
            return $this->unauthRes('Unauthenticated');

        $user = $token->tokenable();
        $token->delete();

        return $this->successRes([
            'message' => 'Logout success!'
        ]);
    }
}
