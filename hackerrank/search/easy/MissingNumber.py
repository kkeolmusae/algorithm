def missingNumbers(arr, brr):
    arr_nums = {}
    brr_nums = {}
    
    i = 0
    while i < len(brr):
        if i < len(arr):
            if arr[i] in arr_nums:
                arr_nums[arr[i]] += 1
            else:
                arr_nums[arr[i]] = 1
            
        if brr[i] in brr_nums:
            brr_nums[brr[i]] += 1
        else:
            brr_nums[brr[i]] = 1
        i += 1 
        
    missing_elements = []
    for num in brr_nums:
        if num in arr_nums and brr_nums[num] == arr_nums[num]:
            continue
        missing_elements.append(num)

    missing_elements.sort()

    return missing_elements

print(missingNumbers([11,4,11,7,13,4,12,11,10,14],[11,4,11,7,3,7,10,13,4,8,12,11,10,14,12]))


