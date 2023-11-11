const arr = [2, 3, 7, 23, 9, 4, 675, 8, 0, -1, 8, 45, -69, 30, 55]
const resultsList = document.getElementById("results")


function reverse(array){
    return array.slice().reverse()
}

allResult("Reversed:", reverse(arr))


function maxAndMin(array){
    let max = array[0]
    let min = array[0]

    for (let f = 1; f < array.length; f++){
        if (array[f] > max){
            max = array[f]
        }
        if (array[f] < min){
            min = array[f]
        }
    }
    return{max, min}
}

const { max, min } = maxAndMin(arr)
allResult("Maximum Value:", max)
allResult("Minimum Value:", min)



function filterArray(array, condition){
    return array.filter(condition)
}

const arrayFiltered = filterArray(arr, (num) => num % 2 == 0)
allResult("Array Filtered (even numbers only):", arrayFiltered)


function positiveNumbers(array){
    return array.reduce((sum, num) => (num > 0 ? sum + num : sum), 0)
}
allResult("Postive Numbers:", positiveNumbers(arr))


function uniqueValues(array){
    return Array.from(new Set(array))
}

const uniqueArr = uniqueValues(arr)
allResult("Unique Values:", uniqueArr)


function flattenArray(array){
    return array.flat(Infinity)
}

const nestedArray = [1, [2, 3], [4, [5, 6]]]
const flatArray = flattenArray(nestedArray)
allResult("Flat Array:", flatArray)


function mergeArray(arr1, arr2){
    return arr1.concat(arr2).sort((a, b) => a - b)
}

const arr1 = [1, 3, 5, 7]
const arr2 = [2, 4, 6, 8]
const mergedArray = mergeArray(arr1, arr2)
allResult("Merge Array:", mergedArray)



function allResult(title, result){
    const listItem = document.createElement("li")
    listItem.textContent = `${title} ${JSON.stringify(result)}`
    resultsList.appendChild(listItem)
}