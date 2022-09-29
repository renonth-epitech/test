// Alignment

export function column({ mainAxisAlignment = "stretch", crossAxisAlignment = "stretch" }) {
    return {
        display: "flex",
        flexDirection: "column",
        justifyItems: mainAxisAlignment, // stretch, center, start, end
        alignItems: crossAxisAlignment
    }
}

export function row({ mainAxisAlignment = "stretch", crossAxisAlignment = "stretch" }) {
    return {
        display: "flex",
        flexDirection: "row",
        justifyItems: mainAxisAlignment, // stretch, center, start, end
        alignItems: crossAxisAlignment
    }
}

export const alignCenter = { textAlign: "center" }

export const alignRight = { textAlign: "right" }

export const alignLeft = { textAlign: "left" }

// Padding

export function padding({ top = 0, bottom = 0, left = 0, right = 0 }) {
    return {
        paddingTop: top,
        paddingBottom: bottom,
        paddingLeft: left,
        paddingRight: right
    }
}

export function paddingAll(pad) {
    return {
        paddingTop: pad,
        paddingBottom: pad,
        paddingLeft: pad,
        paddingRight: pad
    }
}

export function paddingSymmetric({ vertical = 0, horizontal = 0 }) {
    return {
        paddingTop: vertical,
        paddingBottom: vertical,
        paddingLeft: horizontal,
        paddingRight: horizontal
    }
}

// Color

export function backgroundColor(c) {
    return { backgroundColor: c }
}

export function color(c) {
    return { color: c }
}