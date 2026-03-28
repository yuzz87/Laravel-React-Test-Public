<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateRequest;
use App\Models\Task;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tasks = Task::orderby('id','desc')->get();
        return response()->json([
            'message'=>'Tasks fetched Successfully',
            'data' => $tasks,
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        // 送られてきたデータを確認する
        $validated = $request->validated();

        $task = Task::create([
            'title'=>$validated['title'],
            'is_done'=>$validated['is_done'] ?? false,
        ]);
        return response()->json([
            'message'=>'Tasks created Successfully',
            'data' => $task,
        ],201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        return response()->json([
            'message'=>'Task fetched Succesfully',
            'data' => $task,
        ],200);


    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request,Task $task)
    {
        $validated = $request->validated();

        $task->update([
            'title'=>$validated['title'],
            'is_done'=>$validated['is_done'],
        ]);

        response()->json([
            'message' => 'Task updated Succesfully',
            'data' => $task->fresh(),
        ],200);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $task->delete();
        return response()->json([
            'message'=>'Task deleted Succesfully',
            'data'=>null,
        ],200);

    }
}
