pub external type Ref(a)

pub external fn from (val: a) -> Ref(a) = 
    "./ref.ffi.js" "from"

pub external fn get (ref: Ref(a)) -> a = 
    "./ref.ffi.js" "get"

pub external fn set (ref: Ref(a), val: a) -> Nil = 
    "./ref.ffi.js" "set"

pub external fn update (ref: Ref(a), f: fn (a) -> b) -> Ref(b) = 
    "./ref.ffi.js" "update"
