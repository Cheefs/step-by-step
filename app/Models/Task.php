<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 *  @OA\Schema(
 *      @OA\Xml(name="Task"),
 *      @OA\Property(property="id", type="integer"),
 *      @OA\Property(property="title", type="string"),
 *      @OA\Property(property="description", type="string"),
 *      @OA\Property(property="difficult", type="integer"),
 *      @OA\Property(property="solution", type="text"),
 *      @OA\Property(property="subject_id", type="integer"),
 *      @OA\Property(property="type_id", type="integer"),
 *      @OA\Property(property="image", type="string"),
 *      @OA\Property(property="created_at", type="string"),
 *      @OA\Property(property="updated_at", type="string"),
 *      @OA\Property(
 *          property="subject", type="object",
 *          @OA\Items(ref="#/components/schemas/Subject"),
 *      ),
 *      @OA\Property(
 *          property="type", type="object",
 *          @OA\Items(ref="#/components/schemas/TaskType"),
 *      ),
 *      @OA\Property(
 *          property="additions", type="array",
 *          @OA\Items(ref="#/components/schemas/Addition"),
 *      ),
 *      @OA\Property(
 *          property="users", type="array",
 *          @OA\Items(ref="#/components/schemas/User"),
 *      ),
 *  )
 * @property int $id
 * @property string $title
 * @property string $description
 * @property string difficult
 * @property string $solution
 * @property int $subject_id
 * @property int $type_id
 * @property string $image
 */
class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'description', 'difficult', 'solution', 'subject_id', 'type_id', 'image'
    ];

    public static function createRules()
    {
        return [
            'title' => 'required|min:5|max:255',
            'description' => 'required|min:5|max:255',
            'difficult' => 'required|integer',
            'solution' => 'required|min:10',
            'subject_id' => 'required|exists:'.Subject::class.',id',
            'type_id' => 'required|exists:'.TaskType::class.',id',
            'image' => 'required|min:5|max:255',
        ];
    }

    public static function updateRules()
    {
        return [
            'title' => 'min:5|max:255',
            'description' => 'min:5|max:255',
            'difficult' => 'integer',
            'solution' => 'min:10',
            'subject_id' => 'exists:'.Subject::class.',id',
            'type_id' => 'exists:'.TaskType::class.',id',
            'image' => 'required|min:5|max:255',
        ];
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function type()
    {
        return $this->belongsTo(TaskType::class);
    }

    public function additions()
    {
        return $this->belongsToMany(Addition::class, 'task_additions');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_tasks');
    }

    public function userTask()
    {
        return$this->hasMany(UserTask::class, 'task_id', 'id');
    }
}
