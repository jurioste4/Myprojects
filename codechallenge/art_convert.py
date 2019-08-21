def split_byte(x):

    lobyte = x & 0x00FF
    hibyte = x >> 8
    return hibyte, lobyte


def decode(hibyte, lobyte):

    hibyte = hibyte << 7
    decoded = (hibyte | lobyte) - 8192
    return decoded


def encode(x):

    encode_int = x + 8192
    lobyte = encode_int & 0x007F  # 0b0000_0000_0111_1111
    hibyte = ((encode_int & 0x3F80) << 1)  # 0b0011_1111_1000_0000
    encoded = hex(lobyte + hibyte)
    return encoded
