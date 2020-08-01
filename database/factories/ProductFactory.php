<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Product;
use Faker\Generator as Faker;
use Bluemmb\Faker\PicsumPhotosProvider;
use FakerRestaurant\Provider\en_US\Restaurant;
use Illuminate\Support\Arr;

$factory->define(Product::class, function (Faker $faker) {
    $faker->addProvider(new PicsumPhotosProvider($faker));
    $faker->addProvider(new Restaurant($faker));
    /*$array = Arr::shuffle([
        $faker->foodName(),
        $faker->beverageName(),
        $faker->dairyName(),
        $faker->vegetableName(),
        $faker->fruitName(),
        $faker->meatName(),
        $faker->sauceName(),
        ]);*/
    return [
        'name' => $faker->foodName(),
        'description' => $faker->paragraph,
        'avatar' => $faker->imageUrl(300,300),
        'price' => $faker->randomFloat()
    ];
});
