<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
class UpdateTaskRequest extends FormRequest
{
    /**
     * このリクエストを許可するか
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * バリデーションルール
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'is_done' => ['required', 'boolean'],
        ];
    }

    /**
     * 任意: わかりやすい属性名
     */
    public function attributes(): array
    {
        return [
            'title' => 'title',
            'is_done' => 'is_done',
        ];
    }

    /**
     * 任意: カスタムメッセージ
     */
    public function messages(): array
    {
        return [
            'title.required' => 'The title field is required.',
            'title.string' => 'The title must be a string.',
            'title.max' => 'The title must not be greater than 255 characters.',
            'is_done.required' => 'The is_done field is required.',
            'is_done.boolean' => 'The is_done field must be true or false.',
        ];
    }
}
