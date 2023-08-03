import axios from "axios";

const baseUrl = "http://localhost:5000";

const getNoti = (setTo) =>{
  axios.get(`http://localhost:5000/ssis/get`).then(({ data }) => {
    console.log("data ---> ", data);
    setTo(data);
  });
}

const getAllToDo = (setToDo) => {
  axios.get(`http://localhost:5000/service/getall`).then(({ data }) => {
    console.log("data ---> ", data);
    setToDo(data);
  });
};

const getAToDo = (_id,setToDo) => {
  axios.get(`http://localhost:5000/service/Geta/`,{_id}).then(({ data }) => {
    console.log("data ---> ", data);
    setToDo(data);
  });
};


const addToDo = (title,description, setText, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { title,description, setText})
    .then((data) => {
      console.log(data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo ,getAToDo, getNoti};
