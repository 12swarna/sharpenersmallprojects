        //Event listener//
        document.getElementById("get").addEventListener("click",gettodos);
        document.getElementById("post").addEventListener("click",getpost);
        document.getElementById("update").addEventListener("click",getupdate);
        document.getElementById("delete").addEventListener("click",getdelete);
        document.getElementById("sim").addEventListener("click",getsim);
        document.getElementById("headers").addEventListener("click",getheader);
        document.getElementById("transform").addEventListener("click",getTransform);
        document.getElementById("error").addEventListener("click",geterror);
        document.getElementById("cancel").addEventListener("click",getcancel);
        
        
        //AXIOS GLOBAL//
        axios.defaults.headers.common['x-auth-token']="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        
        //making function//
        //getting function//
        //this function gettodos we can set limitof data//
        function gettodos(){
            //FIRST METHOD//
        
        
            // axios({
            //     method:"get",  //get method is compulosry//
            //     url:"https://jsonplaceholder.typicode.com/todos",
            //     params:{   //it setting the limits of details i want 10 details so using params we can set the limit of details//
            //         _limit:10
        
            //     }
            // })
            // .then((print)=>{
            //     showOutput(print);
            // }).catch((err)=>{
            //     console.log(err);
            // })
        
            //SECOND METHOD//
        
            axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
            .then((firsturl)=>{
                showOutput(firsturl);
            }).catch((err)=>{
                console.log(err);
            })
        }
        //in this function we can set data details//
        //getting post function//
        function getpost(){
            //FIRST METHOD//
            // axios({
            //     method:"post",//post method is compulsory to post data
            //     url:"https://jsonplaceholder.typicode.com/todos",
            //     data:{
            //         title:"swarna verma", //this data set on showouput page//
            //         completed:true,
            //         id:2000
        
            //     },
        
            // }).then((firsturl)=>{
            //     showOutput(firsturl)
            // }).catch((err)=>{
            //     console.log(err);
            // })
        
            //SECOND METHOD//
            axios.post("https://jsonplaceholder.typicode.com/todos",{
                title:"swarna kumari",
                roll:40,
                adhar_no:222222222
            }
        
            ).then((firsturl)=>{
                showOutput(firsturl);
            }).catch((err)=>{
                console.log(err);
            })
        
        }
        //getting put patch// //put update the resources//and patch is 
        function getupdate(){
            //put//
        
            // axios({
            //         method:"put",//post method is compulsory to post data
            //         url:"https://jsonplaceholder.typicode.com/todos/1",  // /1 that means it update 1 data //
            //         data:{
            //             title:"priyakumari",
            //             roll:4090,
            //             adhar_no:222222222444444
            
            //         },
            
            //     }).then((firsturl)=>{
            //         showOutput(firsturl)
            //     }).catch((err)=>{
            //         console.log(err);
            //     })
            
            // axios.put("https://jsonplaceholder.typicode.com/todos/1",{
            //         title:"riya verma",
            //         roll:50,
            //         adhar_no:333333
            
            // }
            
            // ).then((firsturl)=>{
            //     showOutput(firsturl);
            // }).catch((err)=>{
            //     console.log(err);
            // })
        
            //patch// it update the things but it also take old data details//
            axios.patch('https://jsonplaceholder.typicode.com/todos/1',{
                title:"riya verma",
                     roll:50,
                     adhar_no:33333
            }
        
            ).then((firsturl)=>{
                showOutput(firsturl);
            }).catch((err)=>{
                console.log(err);
            })
        
        };
        //getting delete//
        function getdelete(){
            axios.delete("https://jsonplaceholder.typicode.com/todos/1"
        
            ).then((firsturl)=>{
                showOutput(firsturl);
            }).catch((err)=>{
                console.log(err);
            })
        
        }
        //getting simiultaneously request//
        function getsim(){
            //first method//
            // axios.all([
            //     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
            //     axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5'),
        
            // ])
            // .then((firsturl)=>{
            //     console.log(firsturl[0]);
            //     console.log(firsturl[1]);
            //     showOutput(firsturl[1]);
            // })
            
            // .catch((err)=>console.log(err));
        
            //ANOTHER METHOD USING SPREAD //
            axios.all([
                axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
                axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5'),
            ])
            .then(axios.spread((todos,posts)=>{
                showOutput(posts);
            }))
        
            
        
        }
        //getting custom header//
        //it sets the heading of post //
        function getheader(){
            const config={
                headers:{
                    "context-writer":"application/json",
                    Authorization:"somenewdetails"
                }
            }
        
            axios.post("https://jsonplaceholder.typicode.com/todos",{
                title:"swarna kumari",
                roll:40,
                adhar_no:222222222
            },config
        
            ).then((firsturl)=>{
                showOutput(firsturl);
            }).catch((err)=>{
                console.log(err);
            })
            
        
        }
        //getting transform TRANSFORMING REQUEST AND RESPONSE//
        function getTransform(){
            const options={
                method:"post",
                url:"https://jsonplaceholder.typicode.com/todos",
                data:{
                    title:"hello world",
                    tileine:"seeing",
                    
                },
                transformResponse: axios.defaults.transformResponse.concat(data =>{
                    data.title=data.title.toUpperCase();
                    return data;
                })
            }
            axios(options).then(firsturl=>showOutput(firsturl))
        
        }
        //getting error handling//
        function geterror(){
            axios.get("https://jsonplaceholder.typicode.com/todos"
            ).then(firsturl=>showOutput(firsturl))
            .catch((err)=>{
                if(err.response){
                    console.log(err.response.data);
                    console.log(err.response.headers);
                    console.log(err.response.status);
                }
            })
        
        }
        //getting cancel//
        function getcancel(){
            const source= axios.CancelToken.source();
        
        
            axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5",{
                CancelToken:source.Token
            })
            .then(firsturl=>showOutput(firsturl))
            .catch(thrown=>{
                if(axios.isCancel(thrown)){
                    console.log("cancelled rquest",thrown.message)
        
                }
            })
            if(true){
                source.cancel("cancelled request")
            }
        
        }
        //intercepting REQUEST AND RESPONESE//
        axios.interceptors.request.use(config=>{
            console.log(`${config.method.toUpperCase()} request send to${config.url} at time${new Date().getTime()}`);
            return config;
        },error=>{
            return  Promise.reject(error);
        }
        );
        //showing output in browser//
        function showOutput(res) {
            document.getElementById('res').innerHTML = `
            <div class="card card-body mb-4">
              <h5>Status: ${res.status}</h5>
            </div>
            <div class="card mt-3">
              <div class="card-header">
                Headers
              </div>
              <div class="card-body">
                <pre>${JSON.stringify(res.headers, null, 2)}</pre>
              </div>
            </div>
            <div class="card mt-3">
              <div class="card-header">
                Data
              </div>
              <div class="card-body">
                <pre>${JSON.stringify(res.data, null, 2)}</pre>
              </div>
            </div>
            <div class="card mt-3">
              <div class="card-header">
                Config
              </div>
              <div class="card-body">
                <pre>${JSON.stringify(res.config, null, 2)}</pre>
              </div>
            </div>
          `;
          }
          
        