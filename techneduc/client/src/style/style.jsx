export default function style({ column, row, padding, paddingAll, paddingSymmetric, backgroundColor, color, align }) {
    var stl = {}

    if (column != null)
        stl = { ...stl, ..._column(column) }
    if (row != null)
        stl = { ...stl, ..._row(row) }
    if (padding != null)
        stl = { ...stl, ..._padding(padding) }
    if (paddingAll != null)
        stl = { ...stl, ..._paddingAll(padding) }
    if (paddingSymmetric != null)
        stl = { ...stl, ..._paddingSymmetric(paddingSymmetric) }
    if (backgroundColor != null)
        stl = { ...stl, ..._backgroundColor(backgroundColor) }
    if (color != null)
        stl = { ...stl, ..._color(color) }
    if (align != null)
        stl = { ...stl, ..._align(align) }

    return stl
}

// Alignment

function _align(alignment) {
    return { "textAlign": alignment }
}

function _column({ mainAxisAlignment = "start", crossAxisAlignment = "start" }) {
    return {
        display: "flex",
        flexDirection: "column",
        justifyContent: mainAxisAlignment,
        alignItems: crossAxisAlignment
    }
}

function _row({ mainAxisAlignment = "start", crossAxisAlignment = "start" }) {
    return {
        display: "flex",
        flexDirection: "row",
        justifyContent: mainAxisAlignment,
        alignItems: crossAxisAlignment
    }
}

// Padding

function _padding({ top = 0, bottom = 0, left = 0, right = 0 }) {
    return {
        paddingTop: top,
        paddingBottom: bottom,
        paddingLeft: left,
        paddingRight: right
    }
}

function _paddingAll(pad) {
    return {
        paddingTop: pad,
        paddingBottom: pad,
        paddingLeft: pad,
        paddingRight: pad
    }
}

function _paddingSymmetric({ vertical = 0, horizontal = 0 }) {
    return {
        paddingTop: vertical,
        paddingBottom: vertical,
        paddingLeft: horizontal,
        paddingRight: horizontal
    }
}

// Color

function _backgroundColor(c) {
    return { backgroundColor: c }
}

function _color(c) {
    return { color: c }
}