<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Baranggay;
use App\Municipality;
use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
name
email
phone_number
password
gender
birthday
avatar
street_address
baranggay_id
municipality_id
user_type
email_verified_at
*/

$factory->define(User::class, function (Faker $faker) {
    $arr = ['m', 'f', 'sm'];
    $name = ['male', 'female'];
    return [
        'name' => $faker->name($name[random_int(0, 1)]),
        'phone_number' => $faker->unique()->phoneNumber,
        'gender' => $arr[random_int(0, 2)],
        'baranggay_id' => Baranggay::pluck('id')->random(),
        'municipality_id' => Municipality::pluck('id')->random(),
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'birthday' => $faker->dateTimeThisCentury->format('Y-m-d'),
        'street_address' => $faker->streetAddress,
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
    ];
});
