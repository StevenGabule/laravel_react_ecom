<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Category;
use App\Product;
use App\Supplier;
use App\User;
use Bluemmb\Faker\PicsumPhotosProvider;
use FakerRestaurant\Provider\en_US\Restaurant;
use Faker\Generator as Faker;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

/*
name
short_description
description
unit
price
qty
avatar
status
price
user_id
*/
$factory->define(Product::class, function (Faker $faker) {
    $faker->addProvider(new PicsumPhotosProvider($faker));
    $faker->addProvider(new Restaurant($faker));
    $name = $faker->foodName();
    $slug = Str::slug($name);
    return [
        'name' => $faker->foodName(),
        'slug' => $slug,
        'short_description' => $faker->paragraph,
        'description' => $faker->paragraphs(4, true),
        'unit' => $faker->sentence(),
        'qty' => random_int(100, 1000),
        'avatar' => $faker->imageUrl(300, 250, 'food', true, 'Faker', true),
        'status' => random_int(0, 1),
        'price' => $faker->randomFloat(2, 100, 500),
        'user_id' => User::whereNotIn('id', [1,2,3])->pluck('id')->random(),
        'category_id' => Category::pluck('id')->random(),
        'supplier_id' => Supplier::pluck('id')->random()
    ];
});
