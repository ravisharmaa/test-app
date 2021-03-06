<?php

namespace App\Http\Controllers;

use App\Category;
use App\Posts;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function index()
    {
        $posts = Posts::select('id','title','body')->get();
        //$category = Category::select('id','title')->with('posts')->get();
        //dd($posts);
        return response()->json([
            'posts'=> $posts,
            'success'=>true
        ]);
    }

    public function store(Request $request)
    {
       Posts::create([
          'title'=> $request->get('title'),
          'body'=>$request->get('body')
       ]);
       return response()->json([
          'success'=>true
       ]);
    }

    public function delete($id)
    {
        $posts = Posts::findOrFail($id);
        $posts->delete();
        return response()->json([
           'success'=>true
        ]);
    }

    public function edit($id) {
        $post = Posts::findOrFail($id);
        return response()->json([
           'post'=>$post,
           'success'=>true
        ]);
    }

    public function update(Request $request)
    {
        $post = Posts::findOrFail($request->get('id'));
        $post->title = $request->get('title');
        $post->body = $request->get('body');
        $post->save();

        return response()->json([
            'post'=>$post,
            'success'=> true
        ]);
    }
}
