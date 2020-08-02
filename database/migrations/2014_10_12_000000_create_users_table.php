<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone_number')->unique();
            $table->string('password');
            $table->enum('gender', ['m', 'f', 'sm'])->nullable();
            $table->date('birthday')->nullable();
            $table->text('avatar')->nullable();
            $table->text('street_address')->nullable();
            $table->text('baranggay_id')->nullable();
            $table->text('municipality_id')->nullable();
            $table->enum('user_type', [1, 2, 3, 4])->default(4)->comments('1-Admin|2-Cashier|3-Carrier|4-Customer');
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
