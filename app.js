// ** Request Body
// ** {
// **  "title": " FrontEnd - Found a bug",
// **    "body": "I'm having a problem with this.",
// **    "assignees": [
// **                "octocat"
// **           ],
// **                "milestone": 1,
// **                    "labels": [
// **                        "bug"
// **                    ]
// ** }



let issues = [{
    "title": " FrontEnd - Update ReadMe",
    "body": "Update the Readme with the proper component explanation and how to run the frontEnd"
},
{
    "title": " FrontEnd - Use environments File",
    "body": "Keep All the service url's ie domain names and the port of the zuul/other service to be kept in the environment.ts in case of the production ulrs ie AWS to be kept in environment.prod.ts"
},
{
    "title": " FrontEnd - Size of the Dist folder not increase 5 MB",
    "body": "Reduces the unused assets, multimodular approach can be applied"
},
{
    "title": " FrontEnd - Avoid useing jQuery, with SPA frameworks"
},
{
    "title": " FrontEnd - Use String interpolation insted of contatination in service Urls",
    "body": ""
},
{
    "title": " FrontEnd - Keep all the Model/Interfaces class in the one Directory"
},
{
    "title": " FrontEnd - PopUp Service, shring object and is injected on the root, Remove it use observables insted"
},
{
    "title": " FrontEnd - Remove the Dead/Commented Code"
},
{
    "title": " FrontEnd - Remove All the inline Styling"
},
{
    "title": " FrontEnd - Remove the Unused Components"
},
{
    "title": " FrontEnd - Dont use Jquery For Dom Manipulation"
},
{
    "title": " FrontEnd - Handle exception in front end",
    "Body": "ie if the request fails to the back-end and returning status is 4XX or 5XX then user should get the appropriate feed back"
},
{
    "title": " FrontEnd - Follow Proper Naming Conventions while naming the varibles and Methods"
},
{
    "title": " FrontEnd - Remove all the hardcoded CSS",
    "body": "the values should be in .em/.rem/.vh/.vw NOT in .px"
},
{
    "title": " FrontEnd - Remove all the console logs"
},
{
    "title": "FrontEnd - Update the project name in the README.md"
},
{
    "title": "FrontEnd - ```npm run build``` to build the production build"
},
{
    "title": "Components to Not be Created on the lingual requirements",
    "body": "Predecide the Component Signature and reuse Components Across the applications"
},
{
    "title" : ""
}
]

let request = require('superagent');
let allRequests = []
let async = require('async');
allRequests = issues.map(e => {
    return createRepo.bind(null, e)
})

function createRepo(issue, cb) {
    return new Promise((resolve, reject) => {
        // console.log(issue)
        request
            .post('https://api.github.com/repos/stackroute/ibm-wave6-findmeclinic/issues')
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Authorization', 'token <ADD-YOUR-TOKEN>')
            .set('User-Agent', 'ruchik-gaikwad')
            .send(issue)
            .end(function (err, result) {
                // console.log(err, result)    
                if (err) {
                    reject(err)
                    cb(err)
                } else {
                    resolve(result.status);
                    cb(null, result.status)
                }
            })
    })
}

// console.log(allRequests);

async.series(allRequests, function (err, result) {
    console.log(result, err)
})

// {
//     Accept : 'application/json',
//     Authorizations: '6cb4f8cb0639281827aad0c6d0f24c3a1471375d'
// }