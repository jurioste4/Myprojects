from art_convert import *


def encode_menu():

    while True:
        try:
            e_in = int(input(
                "Please enter a number in the range of -8192 to 8191\nOtherwise, enter any other key to exit\n"))
            if -8192 <= e_in <= 8191:
                print("The value", e_in, "encodes as", encode(e_in))
            else:
                continue
        except ValueError:
            break


def decode_menu():

    while True:
        try:
            d_in = int(input(
                "Please enter a hex value in between 0x0000 and 0x7F7F\nOtherwise, enter any other key to exit\n"), 16)
            if 0x0000 <= d_in <= 0x7F7F:
                byte = split_byte(d_in)
                print("The value", hex(d_in), "decodes as",
                      decode(byte[0], byte[1]))
        except ValueError:
            break


def start_menu():

    while True:
        print("Press E to Encode")
        print("Press D to Decode")
        print("Press X to Exit")

        text = input().lower()
        if text == "x":
            print("Goodbye!")
            break
        elif text == "e":
            encode_menu()
        elif text == "d":
            decode_menu()


start_menu()
