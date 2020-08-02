<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Supplier;
use Faker\Generator as Faker;

$factory->define(Supplier::class, function (Faker $faker) {
    $name = ['male', 'female'];
    return [
        'name' => $faker->sentence(6, true),
        'contact_person' => $faker->name($name[random_int(0, 1)]),
        'contact_number' => $faker->unique()->phoneNumber
    ];
});
