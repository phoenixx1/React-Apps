#include<napi.h>
#include<string>
#include "greeting.h"

// greetHello function executes a C++ function and returns a string.
// native C++ function that is assigned to greetHello property on exports object
Napi::String greetHello(const Napi::CallbackInfo& info){
    Napi::Env env = info.Env();

    // getting a value from server/NodeJS
    std::string s = info[0].ToString();

    // calling helloUser function greeting.cpp file
    std::string result = helloUser(s);

    // returns new 'Napi::String' value
    return Napi::String::New(env, result);
}


/*
Inside Init function, we can do whatever we want. We can call other functions or third-party
library functions to provide useful features on exports object. In nutshell, the Init function
is the entry point of module registration and this is where we define API of our Native Module.
*/
// callback method when module is registered with NodeJS
// set greetHello property on the exports object and point it to a C++ function.

Napi::Object Init(Napi::Env env, Napi::Object exports){
    // set a key on exports object
    exports.Set(
        Napi::String::New(env, "greetHello"), // property name = 'greetHello'
        Napi::Function::New(env, greetHello) // property value = 'greetHello' function
    );
    // return 'exports' object (always)
    return exports;
}

// register 'greet' module which calls Init method
NODE_API_MODULE(greet, Init);
