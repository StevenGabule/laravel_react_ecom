<?php

use App\Municipality;
use Illuminate\Database\Seeder;

class MunicipalitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $municipality = [
            [ 'name' => 'Valencia City' ],
            [ 'name' => 'Malaybalay City' ]
        ];

        Municipality::insert($municipality);
    }
}
