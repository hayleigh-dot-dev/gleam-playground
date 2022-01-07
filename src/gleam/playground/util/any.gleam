pub external type Any

/// Erases type information.
pub external fn from (val: a) -> Any = 
    "./any.ffi.js" "from"

pub external fn to_string (val: a) -> String = 
    "./any.ffi.js" "to_string"

pub external fn cast (val: Any) -> a = 
    "./any.ffi.js" "from"