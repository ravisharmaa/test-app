<?php

namespace App\Http\Controllers;

use App\Posts;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function index()
    {
        $posts = Posts::select('id','title','body')->get();
        return response()->json([
            'posts'=> $posts]);
    }
}
