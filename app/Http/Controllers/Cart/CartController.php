<?php

namespace App\Http\Controllers\Cart;

use App\Cart;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function addToCart(Request $request)
    {
        Cart::create([
            'user_id' => Auth::id(),
            'product_id' => $request->product_id,
            'qty' => $request->qty,
        ]);

        return response()->json(['status' => 'Successfully added to cart'], 200);
    }
}
