def solution(phone_book):
    phone_book.sort()
    
    phone_idx = 0
    for idx in range(phone_idx + 1, len(phone_book)):
        if phone_book[phone_idx] == phone_book[idx][:len(phone_book[phone_idx])]:
            return False
        phone_idx += 1
    return True