<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function unauthRes($message) {
        return response()->json([
            'message' => $message
        ], 401);
    }

    public function successRes($data) {
        return response()->json($data, 200);
    }

    public function invalidRes($errors) {
        $data = [
            'message' => 'Invalid field',
            'errors' => $errors
        ];

        return response()->json($data);
    }

    public function forbiddenRes() {
        return response()->json([
            'message' => 'Forbidden access'
        ], 403);
    }
}
