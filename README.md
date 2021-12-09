# js-todo

![Screenshot_1](https://user-images.githubusercontent.com/37051222/145354257-be462809-b1df-4d54-bff6-bf6f5ea7c62e.png)



# html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div class="bg-dark text-light">
        <div class="container py-5 text-center">
            <h1 class="mt-3">Yapılacaklar Listesi</h1>
            <div class="input-group mt-4">
                <input type="text" id="note_text" class="form-control" placeholder="Bugün nasıl hissediyorsun?">
                <button type="submit" id="add_btn" class="btn btn-primary">Notunu Ekle</button>
            </div>
        </div>
    </div>

    <div class="">
        <div class="container py-5">
            <div id="note_list">

            </div>
        </div>
    </div>
    

    <script src="js/bootstrap.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
```

# css
```
.paragraph{
    margin: 0;
    cursor: pointer;
    font-size: 35px;
    color: rgb(0, 0, 0);
    text-transform: capitalize; 
}
.p-bg-color{
    background-color: rgb(223, 226, 226);
}
```

# js
```
const noteText=document.querySelector("#note_text")
const addBtn=document.querySelector("#add_btn")
const noteList=document.querySelector("#note_list")

addBtn.addEventListener("click", function(){
    let noteParagraph=document.createElement("p")
    noteList.appendChild(noteParagraph)
    noteParagraph.classList.add("paragraph")
    noteParagraph.innerHTML=noteText.value
    noteText.value=""

    noteParagraph.addEventListener("click", function(){
        noteParagraph.style.textDecoration="line-through"
        noteParagraph.classList.add("p-bg-color")
    })
})
```
