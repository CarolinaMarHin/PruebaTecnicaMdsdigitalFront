
function Like() {
    return (
        addLike()
    );
}

const addLike = async (event) => {
    debugger
    let id = document.getElementById('img-search').value;
    await fetch(`http://localhost:3100/images/${id}/likes`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
};