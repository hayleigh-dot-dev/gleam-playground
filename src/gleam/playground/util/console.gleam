pub external fn assert_ (assertion: Bool, msg: a) -> Nil = 
    "" "window.console.assert"

pub external fn clear () -> Nil = 
    "" "window.console.clear"

pub external fn count (label: String) -> Nil = 
    "" "window.console.count"

pub external fn count_reset (label: String) -> Nil =
    "" "window.console.countReset"

pub external fn debug (msg: a) -> Nil =
    "" "window.console.debug"

pub external fn dir (obj: a) -> Nil =
    "" "window.console.dir"

pub external fn dirxml (obj: a) -> Nil =
    "" "window.console.dirxml"

pub external fn error (msg: a) -> Nil =
    "" "window.console.error"

pub external fn group (label: String) -> Nil =
    "" "window.console.group"

pub external fn group_collapsed (label: String) -> Nil =
    "" "window.console.groupCollapsed"

pub external fn group_end (label: String) -> Nil =
    "" "window.console.groupEnd"

pub external fn info (msg: a) -> Nil =
    "" "window.console.info"

pub external fn log (msg: a) -> Nil =
    "" "window.console.log"

pub external fn table (data: a) -> Nil =
    "" "window.console.table"

pub external fn time (label: String) -> Nil =
    "" "window.console.time"

pub external fn time_end (label: String) -> Nil =
    "" "window.console.timeEnd"

pub external fn time_log (label: String) -> Nil =
    "" "window.console.timeLog"

pub external fn trace (data: a) -> Nil =
    "" "window.console.trace"

pub external fn warn (msg: a) -> Nil =
    "" "window.console.warn"
