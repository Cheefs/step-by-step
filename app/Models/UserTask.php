<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserTask extends Model
{
    use HasFactory;

    protected $table = 'user_tasks';

    protected $fillable = [
        'isCompleted'
    ];

    public static function createRules()
    {
        return [
            'isCompleted' => 'numeric|nullable',
        ];
    }

    public static function updateRules()
    {
        return [
            'isCompleted' => 'numeric|nullable',
        ];
    }
}
