<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(SchoolsTableSeeder::class);
        $this->call(GradesTableSeeder::class);
        $this->call(SubjectsTableSeeder::class);
        $this->call(TasksTableSeeder::class);
    }
}
