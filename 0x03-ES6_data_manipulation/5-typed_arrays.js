export default function createInt8TypedArray(length, position, value) {
    if (typeof length !== "number") {
        throw new Error('Length must be a number');
    }
    else if (typeof position !== "number") {
        throw new Error('Position must be a number');
    }
    else if (typeof value !== "number") {
        throw new Error('Value must be a number');
    }
    else {
        const buffer = new ArrayBuffer(length);
        const int8View = new DataView(buffer);

        if (position > int8View.byteLength - 1 || position < 0) {
            throw new Error("Position outside range");
        }
        int8View.setInt8(position, value);
        return int8View;
    }
}
