<?php

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
        $this->call([
            MunicipalitySeeder::class,
            BaranggaySeeder::class,
            CategorySeeder::class,
            UserSeeder::class,
            SupplierSeeder::class,
            ProductSeeder::class,
            CartSeeder::class
        ]);
    }
}
