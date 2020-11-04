<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use App\Models\School;
use App\Models\User;
use Exception;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;

class SchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index()
    {
        $this->authorize('viewAny', School::class);

        return response()->json(School::all(), Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     * @throws ValidationException
     * @throws AuthorizationException
     */
    public function store(Request $request)
    {
        $this->authorize('create', School::class);

        $data = $this->validate($request, School::rules());

        $school = School::create($data);

        return response()->json($school, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  School  $school
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(School $school)
    {
        $this->authorize('view', $school);

        return response()->json($school, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param School $school
     * @return JsonResponse
     * @throws ValidationException
     * @throws AuthorizationException
     */
    public function update(Request $request, School $school)
    {
        $this->authorize('update', $school);

        $data = $this->validate($request, School::rules());

        $school->update($data);

        return response()->json($school, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param School $school
     * @return JsonResponse
     * @throws Exception
     * @throws AuthorizationException
     */
    public function destroy(School $school)
    {
        $this->authorize('delete', $school);

        $school->delete();

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
