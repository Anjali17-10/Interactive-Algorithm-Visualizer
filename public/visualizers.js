// ================= Two Pointers =================

const arr = [1,2,3,4,5,6];

const steps = [
{
    left:0,
    right:5,
    explanation:"Initialize left and right pointers."
},
{
    left:1,
    right:4,
    explanation:"Move both pointers inward."
},
{
    left:2,
    right:3,
    explanation:"Continue until pointers meet."
}
];

let currentStep = 0;
function renderArray() {

    const container =
    document.getElementById("arrayContainer");

    container.innerHTML = "";

    const step = steps[currentStep];

    document
    .getElementById("stepCounter")
    .textContent =
    `Step ${currentStep+1}/${steps.length}`;

    document
    .getElementById("explanation")
    .textContent =
    step.explanation;

    arr.forEach((value,index)=>{

        let label = "";

        if(index===step.left)
            label += "L";

        if(index===step.right)
            label += "R";

        container.innerHTML += `

        <div class="flex flex-col items-center">

            <div class="text-blue-600 font-bold mb-2">
                ${label}
            </div>

            <div
            class="
            w-16 h-16
            rounded-xl
            shadow-lg
            flex
            items-center
            justify-center
            text-2xl
            font-bold

            ${
                index===step.left ||
                index===step.right
                ?
                "bg-blue-600 text-white"
                :
                "bg-blue-100"
            }
            ">

                ${value}

            </div>

        </div>
        `;
    });

}

document
.getElementById("nextBtn")
.addEventListener("click",()=>{
    if(currentStep < steps.length-1){
        currentStep++;
        renderArray();
    }
});
document
.getElementById("prevBtn")
.addEventListener("click",()=>{
    if(currentStep > 0){
        currentStep--;
        renderArray();
    }

});
document
.getElementById("resetBtn")
.addEventListener("click",()=>{
    currentStep = 0;
    renderArray();

});
// ================= Sliding Window =================
const windowArr = [1,3,2,5,4,6];

const windowSteps = [

{
    start: 0,
    end: 2,
    explanation: "Current window is [1,3,2]"
},

{
    start: 1,
    end: 3,
    explanation: "Slide window to [3,2,5]"
},

{
    start: 2,
    end: 4,
    explanation: "Slide window to [2,5,4]"
},

{
    start: 3,
    end: 5,
    explanation: "Slide window to [5,4,6]"
}

];

let currentWindowStep = 0;
function renderWindow() {

    const container =
    document.getElementById(
        "windowArrayContainer"
    );

    container.innerHTML = "";

    const step =
    windowSteps[currentWindowStep];

    document
    .getElementById(
        "windowExplanation"
    )
    .textContent =
    step.explanation;

    windowArr.forEach((value,index)=>{

        container.innerHTML += `

        <div
        class="
        w-16 h-16
        rounded-xl
        shadow-lg
        flex
        items-center
        justify-center
        text-2xl
        font-bold

        ${
            index>=step.start &&
            index<=step.end
            ?
            "bg-green-500 text-white"
            :
            "bg-green-100"
        }
        ">

            ${value}

        </div>

        `;
    });
document
.getElementById("windowStepCounter")
.textContent =
`Step ${currentWindowStep+1}/${windowSteps.length}`;
}
document
.getElementById("windowNextBtn")
.addEventListener("click",()=>{

    if(currentWindowStep <
        windowSteps.length-1){

        currentWindowStep++;

        renderWindow();

    }

});
document
.getElementById("windowPrevBtn")
.addEventListener("click",()=>{

    if(currentWindowStep > 0){

        currentWindowStep--;

        renderWindow();

    }

});
document
.getElementById("windowResetBtn")
.addEventListener("click",()=>{

    currentWindowStep = 0;

    renderWindow();

});
///===========Kadane's Algorithm=========
const kadaneArr = [-2,1,-3,4,-1,2,1,-5,4];

const kadaneSteps = [
{
    start:0,
    end:0,
    explanation:"Start with -2."
},
{
    start:1,
    end:1,
    explanation:"Reset current sum to 1."
},
{
    start:3,
    end:3,
    explanation:"Reset current sum to 4."
},
{
    start:3,
    end:4,
    explanation:"Extend to [4,-1]."
},
{
    start:3,
    end:5,
    explanation:"Extend to [4,-1,2]."
},
{
    start:3,
    end:6,
    explanation:"Maximum subarray becomes [4,-1,2,1]."
}
];

let currentKadaneStep = 0;
function renderKadane()
{
    const container =
    document.getElementById(
        "kadaneArrayContainer"
    );

    container.innerHTML = "";

    const step =
    kadaneSteps[currentKadaneStep];

    document
    .getElementById(
        "kadaneStepCounter"
    )
    .textContent =
    `Step ${currentKadaneStep+1}/${kadaneSteps.length}`;

    document
    .getElementById(
        "kadaneExplanation"
    )
    .textContent =
    step.explanation;

    kadaneArr.forEach((value,index)=>{

        container.innerHTML += `
        <div
        class="
        w-16 h-16
        rounded-xl
        shadow-lg
        flex
        items-center
        justify-center
        text-2xl
        font-bold

    ${
    index >= step.start &&
    index <= step.end
    ?
    "bg-purple-500 text-white"
    :
    "bg-purple-100"
  }
        ">

        ${value}

        </div>
        `;
    });

}
document
.getElementById("kadanePrevBtn")
.addEventListener("click",()=>{

    if(currentKadaneStep > 0)
    {
        currentKadaneStep--;

        renderKadane();
    }

});
document
.getElementById("kadaneNextBtn")
.addEventListener("click",()=>{

    if(currentKadaneStep < kadaneSteps.length-1)
    {
        currentKadaneStep++;

        renderKadane();
    }

});
document
.getElementById("kadaneResetBtn")
.addEventListener("click",()=>{

    currentKadaneStep = 0;

    renderKadane();

});
//=========Prefix Sum========
const prefixArr = [3,1,4,2,5];

const prefixSteps = [

{
    current:0,
    prefix:[3],
    explanation:"Prefix sum of first element is 3."
},

{
    current:1,
    prefix:[3,4],
    explanation:"3 + 1 = 4."
},

{
    current:2,
    prefix:[3,4,8],
    explanation:"4 + 4 = 8."
},

{
    current:3,
    prefix:[3,4,8,10],
    explanation:"8 + 2 = 10."
},

{
    current:4,
    prefix:[3,4,8,10,15],
    explanation:"10 + 5 = 15."
}

];

let currentPrefixStep = 0;

function renderPrefix()
{
    const container =
    document.getElementById("prefixArrayContainer");

    container.innerHTML = "";

    const step =
    prefixSteps[currentPrefixStep];

    document
    .getElementById("prefixStepCounter")
    .textContent =
    `Step ${currentPrefixStep+1}/${prefixSteps.length}`;

    document
    .getElementById("prefixExplanation")
    .textContent =
    step.explanation;

    prefixArr.forEach((value,index)=>{

        container.innerHTML += `

        <div class="flex flex-col items-center">

            <div
            class="
            w-16 h-16
            rounded-xl
            shadow-lg
            flex
            items-center
            justify-center
            text-2xl
            font-bold

            ${
                index<=step.current
                ?
                "bg-indigo-500 text-white"
                :
                "bg-indigo-100"
            }
            ">

            ${value}

            </div>

            <div class="mt-2 font-bold text-indigo-600">

            ${
                index<=step.current
                ? step.prefix[index]
                : ""
            }

            </div>

        </div>

        `;
    });

}
document
.getElementById("prefixPrevBtn")
.addEventListener("click",()=>{

    if(currentPrefixStep>0)
    {
        currentPrefixStep--;

        renderPrefix();
    }

});

document
.getElementById("prefixNextBtn")
.addEventListener("click",()=>{

    if(currentPrefixStep<prefixSteps.length-1)
    {
        currentPrefixStep++;

        renderPrefix();
    }

});

document
.getElementById("prefixResetBtn")
.addEventListener("click",()=>{

    currentPrefixStep=0;

    renderPrefix();

});
// ================= Binary Search on Answer =================

const binaryAnswerArr = [1,2,3,4,5,6,7,8,9,10,11];

const binaryAnswerSteps = [

{
    low:1,
    mid:6,
    high:11,
    explanation:"Check answer = 6."
},

{
    low:1,
    mid:3,
    high:5,
    explanation:"Answer may be smaller."
},

{
    low:4,
    mid:4,
    high:5,
    explanation:"Answer found."
}

];

let currentBinaryAnswerStep = 0;

function renderBinaryAnswer()
{
    const container =
    document.getElementById(
        "binaryAnswerArrayContainer"
    );

    container.innerHTML = "";

    const step =
    binaryAnswerSteps[
        currentBinaryAnswerStep
    ];

    document
    .getElementById(
        "binaryAnswerStepCounter"
    )
    .textContent =
    `Step ${currentBinaryAnswerStep+1}/${binaryAnswerSteps.length}`;

    document
    .getElementById(
        "binaryAnswerExplanation"
    )
    .textContent =
    step.explanation;

    binaryAnswerArr.forEach((value)=>{

        let label = "";

        if(value===step.low)
            label += "L";

        if(value===step.mid)
            label += "M";

        if(value===step.high)
            label += "H";

        container.innerHTML += `

        <div class="flex flex-col items-center">

            <div class="text-orange-600 font-bold mb-2">
                ${label}
            </div>

            <div
            class="
            w-16 h-16
            rounded-xl
            shadow-lg
            flex
            items-center
            justify-center
            text-2xl
            font-bold

            ${
                value===step.mid
                ?
                "bg-orange-500 text-white"
                :
                value===step.low
                ?
                "bg-green-500 text-white"
                :
                value===step.high
                ?
                "bg-red-500 text-white"
                :
                "bg-orange-100"
            }
            ">

                ${value}

            </div>

        </div>
        `;
    });

}
document
.getElementById("binaryAnswerPrevBtn")
.addEventListener("click",()=>{

    if(currentBinaryAnswerStep > 0)
    {
        currentBinaryAnswerStep--;

        renderBinaryAnswer();
    }

});

document
.getElementById("binaryAnswerNextBtn")
.addEventListener("click",()=>{

    if(
        currentBinaryAnswerStep
        <
        binaryAnswerSteps.length-1
    )
    {
        currentBinaryAnswerStep++;

        renderBinaryAnswer();
    }

});

document
.getElementById("binaryAnswerResetBtn")
.addEventListener("click",()=>{

    currentBinaryAnswerStep = 0;

    renderBinaryAnswer();

});
// ================= Linear Search =================

const linearArr = [3,8,2,7,5,1];

const linearSteps = [

{
    current:0,
    found:false,
    explanation:"Check element 3."
},

{
    current:1,
    found:false,
    explanation:"Check element 8."
},

{
    current:2,
    found:false,
    explanation:"Check element 2."
},

{
    current:3,
    found:true,
    explanation:"Target 7 found."
}

];

let currentLinearStep = 0;
function renderLinear()
{
    const container =
    document.getElementById(
        "linearArrayContainer"
    );

    container.innerHTML = "";

    const step =
    linearSteps[currentLinearStep];

    document
    .getElementById(
        "linearStepCounter"
    )
    .textContent =
    `Step ${currentLinearStep+1}/${linearSteps.length}`;

    document
    .getElementById(
        "linearExplanation"
    )
    .textContent =
    step.explanation;

    linearArr.forEach((value,index)=>{

        container.innerHTML += `
        <div
        class="
        w-16 h-16
        rounded-xl
        shadow-lg
        flex
        items-center
        justify-center
        text-2xl
        font-bold

        ${
            index===step.current
            ?
            (
                step.found
                ?
                "bg-green-500 text-white"
                :
                "bg-blue-500 text-white"
            )
            :
            "bg-blue-100"
        }
        ">

            ${value}

        </div>
        `;
    });

}
document
.getElementById("linearPrevBtn")
.addEventListener("click",()=>{

    if(currentLinearStep > 0)
    {
        currentLinearStep--;

        renderLinear();
    }

});

document
.getElementById("linearNextBtn")
.addEventListener("click",()=>{

    if(currentLinearStep < linearSteps.length-1)
    {
        currentLinearStep++;

        renderLinear();
    }

});

document
.getElementById("linearResetBtn")
.addEventListener("click",()=>{

    currentLinearStep = 0;

    renderLinear();

});


//=====binary search======
const binaryArr = [1,3,5,7,9,11,13];

const binarySteps = [

{
    low:1,
    mid:7,
    high:13,
    explanation:"Mid = 7. Target 9 is greater, move low right."
},

{
    low:9,
    mid:11,
    high:13,
    explanation:"Mid = 11. Target 9 is smaller, move high left."
},

{
    low:9,
    mid:9,
    high:9,
    explanation:"Target found."
}

];

let currentBinaryStep = 0;

function renderBinary()
{
    const container =
    document.getElementById(
        "binaryArrayContainer"
    );

    container.innerHTML = "";

    const step =
    binarySteps[currentBinaryStep];

    document
    .getElementById(
        "binaryStepCounter"
    )
    .textContent =
    `Step ${currentBinaryStep+1}/${binarySteps.length}`;

    document
    .getElementById(
        "binaryExplanation"
    )
    .textContent =
    step.explanation;

    binaryArr.forEach((value)=>{

        let label = "";

        if(value===step.low)
            label += "L";

        if(value===step.mid)
            label += "M";

        if(value===step.high)
            label += "H";

        container.innerHTML += `

        <div class="flex flex-col items-center">

            <div class="text-orange-600 font-bold mb-2">
                ${label}
            </div>

            <div
            class="
            w-16 h-16
            rounded-xl
            shadow-lg
            flex
            items-center
            justify-center
            text-2xl
            font-bold

            ${
                value===step.mid
                ?
                "bg-orange-500 text-white"
                :
                value===step.low
                ?
                "bg-green-500 text-white"
                :
                value===step.high
                ?
                "bg-red-500 text-white"
                :
                "bg-orange-100"
            }
            ">

                ${value}

            </div>

        </div>
        `;
    });

}

document
.getElementById("binaryPrevBtn")
.addEventListener("click",()=>{

    if(currentBinaryStep > 0)
    {
        currentBinaryStep--;

        renderBinary();
    }

});

document
.getElementById("binaryNextBtn")
.addEventListener("click",()=>{

    if(currentBinaryStep < binarySteps.length-1)
    {
        currentBinaryStep++;

        renderBinary();
    }

});

document
.getElementById("binaryResetBtn")
.addEventListener("click",()=>{

    currentBinaryStep = 0;

    renderBinary();

});

// ================= Lower Bound =================

const lowerArr = [1,2,4,4,4,6,8];

const lowerSteps = [

{
    low:1,
    mid:4,
    high:8,
    answer:4,
    explanation:"4 ≥ target, save answer and move left."
},

{
    low:1,
    mid:2,
    high:4,
    answer:4,
    explanation:"2 < target, move right."
},

{
    low:4,
    mid:4,
    high:4,
    answer:4,
    explanation:"First occurrence found."
}

];

let currentLowerStep = 0;

function renderLower()
{
    const container =
    document.getElementById(
        "lowerArrayContainer"
    );

    container.innerHTML = "";

    const step =
    lowerSteps[currentLowerStep];

    document
    .getElementById("lowerStepCounter")
    .textContent =
    `Step ${currentLowerStep+1}/${lowerSteps.length}`;

    document
    .getElementById("lowerExplanation")
    .textContent =
    step.explanation;

    lowerArr.forEach((value)=>{

        let label = "";

        if(value===step.low)
            label += "L";

        if(value===step.mid)
            label += "M";

        if(value===step.high)
            label += "H";

        if(value===step.answer)
            label += " A";

        container.innerHTML += `

        <div class="flex flex-col items-center">

            <div class="text-green-600 font-bold mb-2">
                ${label}
            </div>

            <div class="
            w-16 h-16 rounded-xl shadow-lg
            flex items-center justify-center
            text-2xl font-bold

            ${
                value===step.answer
                ?
                "bg-green-600 text-white"
                :
                "bg-green-100"
            }
            ">

            ${value}

            </div>

        </div>

        `;
    });

}
document
.getElementById("lowerPrevBtn")
.addEventListener("click",()=>{

    if(currentLowerStep > 0)
    {
        currentLowerStep--;

        renderLower();
    }

});

document
.getElementById("lowerNextBtn")
.addEventListener("click",()=>{

    if(currentLowerStep < lowerSteps.length-1)
    {
        currentLowerStep++;

        renderLower();
    }

});

document
.getElementById("lowerResetBtn")
.addEventListener("click",()=>{

    currentLowerStep = 0;

    renderLower();

});
// ================= Upper Bound =================

const upperArr = [1,2,4,4,4,6,8];

const upperSteps = [

{
    low:1,
    mid:4,
    high:8,
    answer:6,
    explanation:"4 ≤ target, move right."
},

{
    low:6,
    mid:6,
    high:8,
    answer:6,
    explanation:"6 > target, save answer."
},

{
    low:6,
    mid:6,
    high:6,
    answer:6,
    explanation:"Upper bound found."
}

];

let currentUpperStep = 0;

function renderUpper()
{
    const container =
    document.getElementById(
        "upperArrayContainer"
    );

    container.innerHTML = "";

    const step =
    upperSteps[currentUpperStep];

    document
    .getElementById("upperStepCounter")
    .textContent =
    `Step ${currentUpperStep+1}/${upperSteps.length}`;

    document
    .getElementById("upperExplanation")
    .textContent =
    step.explanation;

    upperArr.forEach((value)=>{

        let label = "";

        if(value===step.low)
            label += "L";

        if(value===step.mid)
            label += "M";

        if(value===step.high)
            label += "H";

        if(value===step.answer)
            label += " A";

        container.innerHTML += `

        <div class="flex flex-col items-center">

            <div class="text-pink-600 font-bold mb-2">
                ${label}
            </div>

            <div class="
            w-16 h-16 rounded-xl shadow-lg
            flex items-center justify-center
            text-2xl font-bold

            ${
                value===step.answer
                ?
                "bg-pink-500 text-white"
                :
                "bg-pink-100"
            }
            ">

            ${value}

            </div>

        </div>

        `;
    });

}
document
.getElementById("upperPrevBtn")
.addEventListener("click",()=>{

    if(currentUpperStep > 0)
    {
        currentUpperStep--;

        renderUpper();
    }

});

document
.getElementById("upperNextBtn")
.addEventListener("click",()=>{

    if(currentUpperStep < upperSteps.length-1)
    {
        currentUpperStep++;

        renderUpper();
    }

});

document
.getElementById("upperResetBtn")
.addEventListener("click",()=>{

    currentUpperStep = 0;

    renderUpper();

});

// ================= Stack Operations =================

const stackSteps = [

{
    stack:[10],
    explanation:"Push 10 into the stack."
},

{
    stack:[10,20],
    explanation:"Push 20 into the stack."
},

{
    stack:[10,20,30],
    explanation:"Push 30 into the stack."
},

{
    stack:[10,20],
    explanation:"Pop the top element 30."
},

{
    stack:[10,20,40],
    explanation:"Push 40 into the stack."
}

];

let currentStackStep = 0;

function renderStack()
{
    const container =
    document.getElementById(
        "stackContainer"
    );

    container.innerHTML = "";

    const step =
    stackSteps[currentStackStep];

    document
    .getElementById(
        "stackStepCounter"
    )
    .textContent =
    `Step ${currentStackStep+1}/${stackSteps.length}`;

    document
    .getElementById(
        "stackExplanation"
    )
    .textContent =
    step.explanation;

    step.stack.forEach((value,index)=>{

        container.innerHTML += `

        <div
        class="
        w-24 h-16
        rounded-xl
        shadow-lg
        flex
        items-center
        justify-center
        text-2xl
        font-bold

        ${
            index === step.stack.length-1
            ?
            "bg-blue-600 text-white"
            :
            "bg-blue-100"
        }
        ">

        ${value}

        </div>

        `;

    });

}
document
.getElementById("stackPrevBtn")
.addEventListener("click",()=>{

    if(currentStackStep > 0)
    {
        currentStackStep--;

        renderStack();
    }

});

document
.getElementById("stackNextBtn")
.addEventListener("click",()=>{

    if(currentStackStep < stackSteps.length-1)
    {
        currentStackStep++;

        renderStack();
    }

});

document
.getElementById("stackResetBtn")
.addEventListener("click",()=>{

    currentStackStep = 0;

    renderStack();

});
// ================= Queue Operations =================

const queueSteps = [

{
    queue:[10],
    explanation:"Enqueue 10."
},

{
    queue:[10,20],
    explanation:"Enqueue 20."
},

{
    queue:[10,20,30],
    explanation:"Enqueue 30."
},

{
    queue:[20,30],
    explanation:"Dequeue 10 from the front."
},

{
    queue:[20,30,40],
    explanation:"Enqueue 40."
}

];

let currentQueueStep = 0;

function renderQueue()
{
    const container =
    document.getElementById(
        "queueContainer"
    );

    container.innerHTML = "";

    const step =
    queueSteps[currentQueueStep];

    document
    .getElementById(
        "queueStepCounter"
    )
    .textContent =
    `Step ${currentQueueStep+1}/${queueSteps.length}`;

    document
    .getElementById(
        "queueExplanation"
    )
    .textContent =
    step.explanation;

    step.queue.forEach((value,index)=>{

        let label = "";

        if(index===0)
            label += "F";

        if(index===step.queue.length-1)
            label += "R";

        container.innerHTML += `

        <div class="flex flex-col items-center">

            <div class="font-bold mb-2 text-green-700">
                ${label}
            </div>

            <div
            class="
            w-16 h-16
            rounded-xl
            shadow-lg
            flex
            items-center
            justify-center
            text-2xl
            font-bold

            ${
                index===0
                ?
                "bg-green-500 text-white"
                :
                index===step.queue.length-1
                ?
                "bg-red-500 text-white"
                :
                "bg-blue-100"
            }
            ">

            ${value}

            </div>

        </div>

        `;
    });

}
document
.getElementById("queuePrevBtn")
.addEventListener("click",()=>{

    if(currentQueueStep > 0)
    {
        currentQueueStep--;

        renderQueue();
    }

});

document
.getElementById("queueNextBtn")
.addEventListener("click",()=>{

    if(currentQueueStep < queueSteps.length-1)
    {
        currentQueueStep++;

        renderQueue();
    }

});

document
.getElementById("queueResetBtn")
.addEventListener("click",()=>{

    currentQueueStep = 0;

    renderQueue();

});
// ================= Valid Parentheses =================

const parenthesesSteps = [

{
    current:"(",
    stack:["("],
    explanation:"Push ( onto stack."
},

{
    current:"{",
    stack:["(","{"],
    explanation:"Push { onto stack."
},

{
    current:"}",
    stack:["("],
    explanation:"} matches {, so pop."
},

{
    current:")",
    stack:[],
    explanation:") matches (, so pop."
}

];

let currentParenthesesStep = 0;

function renderParentheses()
{
    const container =
    document.getElementById(
        "parenthesesStack"
    );

    container.innerHTML = "";

    const step =
    parenthesesSteps[currentParenthesesStep];

    document
    .getElementById(
        "parenthesesStepCounter"
    )
    .textContent =
    `Step ${currentParenthesesStep+1}/${parenthesesSteps.length}`;

    document
    .getElementById(
        "currentChar"
    )
    .textContent =
    `Current Character : ${step.current}`;

    document
    .getElementById(
        "parenthesesExplanation"
    )
    .textContent =
    step.explanation;

    step.stack.forEach((value,index)=>{

        container.innerHTML += `

        <div
        class="
        w-24 h-16
        rounded-xl
        shadow-lg
        flex
        items-center
        justify-center
        text-3xl
        font-bold

        ${
            index===step.stack.length-1
            ?
            "bg-purple-600 text-white"
            :
            "bg-purple-100"
        }
        ">

        ${value}

        </div>

        `;
    });

}

document
.getElementById("parenthesesPrevBtn")
.addEventListener("click",()=>{

    if(currentParenthesesStep > 0)
    {
        currentParenthesesStep--;

        renderParentheses();
    }

});

document
.getElementById("parenthesesNextBtn")
.addEventListener("click",()=>{

    if(currentParenthesesStep < parenthesesSteps.length-1)
    {
        currentParenthesesStep++;

        renderParentheses();
    }

});

document
.getElementById("parenthesesResetBtn")
.addEventListener("click",()=>{

    currentParenthesesStep = 0;

    renderParentheses();

});
// ================= Next Greater Element =================

const ngeArr = [2,1,3,4];

const ngeSteps = [

{
    current:3,
    stack:[4],
    explanation:"Start from right. Push 4."
},

{
    current:2,
    stack:[4,3],
    explanation:"Next greater of 3 is 4. Push 3."
},

{
    current:1,
    stack:[4,3,1],
    explanation:"Next greater of 1 is 3. Push 1."
},

{
    current:0,
    stack:[4,3,2],
    explanation:"Pop 1. Next greater of 2 is 3."
}

];

let currentNgeStep = 0;

function renderNge()
{
    const arrayContainer =
    document.getElementById(
        "ngeArrayContainer"
    );

    const stackContainer =
    document.getElementById(
        "ngeStackContainer"
    );

    arrayContainer.innerHTML = "";
    stackContainer.innerHTML = "";

    const step =
    ngeSteps[currentNgeStep];

    document
    .getElementById(
        "ngeStepCounter"
    )
    .textContent =
    `Step ${currentNgeStep+1}/${ngeSteps.length}`;

    document
    .getElementById(
        "ngeExplanation"
    )
    .textContent =
    step.explanation;

    ngeArr.forEach((value,index)=>{

        arrayContainer.innerHTML += `

        <div
        class="
        w-16 h-16
        rounded-xl
        shadow-lg
        flex
        items-center
        justify-center
        text-2xl
        font-bold

        ${
            index===step.current
            ?
            "bg-orange-500 text-white"
            :
            "bg-orange-100"
        }
        ">

        ${value}

        </div>

        `;
    });

    step.stack.forEach((value,index)=>{

        stackContainer.innerHTML += `

        <div
        class="
        w-20 h-14
        rounded-xl
        shadow-lg
        flex
        items-center
        justify-center
        text-xl
        font-bold

        ${
            index===step.stack.length-1
            ?
            "bg-orange-500 text-white"
            :
            "bg-orange-100"
        }
        ">

        ${value}

        </div>

        `;
    });

}
document
.getElementById("ngePrevBtn")
.addEventListener("click",()=>{

    if(currentNgeStep > 0)
    {
        currentNgeStep--;

        renderNge();
    }

});

document
.getElementById("ngeNextBtn")
.addEventListener("click",()=>{

    if(currentNgeStep < ngeSteps.length-1)
    {
        currentNgeStep++;

        renderNge();
    }

});

document
.getElementById("ngeResetBtn")
.addEventListener("click",()=>{

    currentNgeStep = 0;

    renderNge();

});

// ================= Stock Span Problem =================

const stockArr = [100,80,60,70,60,75,85];

const stockSteps = [

{
    current:0,
    stack:[100],
    span:[1],
    explanation:"Push 100. Span = 1."
},

{
    current:1,
    stack:[100,80],
    span:[1,1],
    explanation:"Previous greater element is 100. Span = 1."
},

{
    current:2,
    stack:[100,80,60],
    span:[1,1,1],
    explanation:"Previous greater element is 80. Span = 1."
},

{
    current:3,
    stack:[100,80,70],
    span:[1,1,1,2],
    explanation:"Pop 60. Previous greater element is 80. Span = 2."
},

{
    current:4,
    stack:[100,80,70,60],
    span:[1,1,1,2,1],
    explanation:"Previous greater element is 70. Span = 1."
},

{
    current:5,
    stack:[100,80,75],
    span:[1,1,1,2,1,4],
    explanation:"Pop 60 and 70. Previous greater element is 80. Span = 4."
},

{
    current:6,
    stack:[100,85],
    span:[1,1,1,2,1,4,6],
    explanation:"Pop 75 and 80. Previous greater element is 100. Span = 6."
}

];

let currentStockStep = 0;

function renderStock()
{
    const arrayContainer =
    document.getElementById("stockArrayContainer");

    const stackContainer =
    document.getElementById("stockStackContainer");

    const spanContainer =
    document.getElementById("spanContainer");

    arrayContainer.innerHTML = "";
    stackContainer.innerHTML = "";
    spanContainer.innerHTML = "";

    const step = stockSteps[currentStockStep];

    document
    .getElementById("stockStepCounter")
    .textContent =
    `Step ${currentStockStep+1}/${stockSteps.length}`;

    document
    .getElementById("stockExplanation")
    .textContent =
    step.explanation;

    stockArr.forEach((value,index)=>{

        arrayContainer.innerHTML += `
        <div
        class="
        w-16 h-16
        rounded-xl
        shadow-lg
        flex
        items-center
        justify-center
        text-xl
        font-bold

        ${
            index===step.current
            ?
            "bg-green-500 text-white"
            :
            "bg-green-100"
        }
        ">

        ${value}

        </div>
        `;
    });

    step.stack.forEach((value,index)=>{

        stackContainer.innerHTML += `
        <div
        class="
        w-20 h-14
        rounded-xl
        shadow-lg
        flex
        items-center
        justify-center
        text-xl
        font-bold

        ${
            index===step.stack.length-1
            ?
            "bg-green-500 text-white"
            :
            "bg-green-100"
        }
        ">

        ${value}

        </div>
        `;
    });

    step.span.forEach((value)=>{

        spanContainer.innerHTML += `
        <div
        class="
        w-14 h-14
        rounded-xl
        shadow-lg
        flex
        items-center
        justify-center
        text-lg
        font-bold
        bg-blue-100">

        ${value}

        </div>
        `;
    });

}
document
.getElementById("stockPrevBtn")
.addEventListener("click",()=>{

    if(currentStockStep > 0)
    {
        currentStockStep--;

        renderStock();
    }

});

document
.getElementById("stockNextBtn")
.addEventListener("click",()=>{

    if(currentStockStep < stockSteps.length-1)
    {
        currentStockStep++;

        renderStock();
    }

});

document
.getElementById("stockResetBtn")
.addEventListener("click",()=>{

    currentStockStep = 0;

    renderStock();

});


//======histogram====
const lrhArr = [2,1,5,6,2,3];

const lrhSteps = [

{
    current:0,
    stack:[0],
    explanation:
    "Push index 0 (height 2) into stack."
},

{
    current:1,
    stack:[1],
    explanation:
    "Height 1 is smaller than 2, pop index 0 and compute area 2×1 = 2."
},

{
    current:2,
    stack:[1,2],
    explanation:
    "Height 5 is greater than 1, push index 2."
},

{
    current:3,
    stack:[1,2,3],
    explanation:
    "Height 6 is greater than 5, push index 3."
},

{
    current:4,
    stack:[1,4],
    explanation:
    "Height 2 causes popping 6 and 5. Areas are computed and max becomes 10."
},

{
    current:5,
    stack:[1,4,5],
    explanation:
    "Height 3 is greater than 2, push index 5."
}

];

let currentLrhStep = 0;

function renderLrh()
{
    const arrayContainer =
    document.getElementById(
        "lrhArrayContainer"
    );

    const stackContainer =
    document.getElementById(
        "lrhStackContainer"
    );

    arrayContainer.innerHTML = "";
    stackContainer.innerHTML = "";

    const step =
    lrhSteps[currentLrhStep];

    document
    .getElementById(
        "lrhStepCounter"
    )
    .textContent =
    `Step ${currentLrhStep+1}/${lrhSteps.length}`;

    document
    .getElementById(
        "lrhExplanation"
    )
    .textContent =
    step.explanation;

    lrhArr.forEach((value,index)=>{

        arrayContainer.innerHTML += `

        <div class="flex flex-col items-center">

            <div
            style="height:${value*25}px"
            class="
            w-16
            rounded-t-xl
            shadow-lg
            flex
            items-end
            justify-center
            text-lg
            font-bold

            ${
                index===step.current
                ?
                "bg-orange-500 text-white"
                :
                "bg-orange-100"
            }
            ">

            ${value}

            </div>

        </div>

        `;
    });

    step.stack.forEach((value,index)=>{

        stackContainer.innerHTML += `

        <div
        class="
        w-20 h-14
        rounded-xl
        shadow-lg
        flex
        items-center
        justify-center
        text-xl
        font-bold

        ${
            index===step.stack.length-1
            ?
            "bg-orange-500 text-white"
            :
            "bg-orange-100"
        }
        ">

        ${value}

        </div>

        `;

    });

}
document
.getElementById("lrhPrevBtn")
.addEventListener("click",()=>{

    if(currentLrhStep > 0)
    {
        currentLrhStep--;

        renderLrh();
    }

});

document
.getElementById("lrhNextBtn")
.addEventListener("click",()=>{

    if(currentLrhStep < lrhSteps.length-1)
    {
        currentLrhStep++;

        renderLrh();
    }

});

document
.getElementById("lrhResetBtn")
.addEventListener("click",()=>{

    currentLrhStep = 0;

    renderLrh();

});

//=======circular queue ========
const cqArr = [10,20,30,40,50];

const cqSteps = [

{
    front:0,
    rear:0,
    active:0,
    explanation:
    "Insert 10 at position 0."
},

{
    front:0,
    rear:1,
    active:1,
    explanation:
    "Insert 20 at position 1."
},

{
    front:0,
    rear:2,
    active:2,
    explanation:
    "Insert 30 at position 2."
},

{
    front:1,
    rear:2,
    active:0,
    explanation:
    "Delete 10. Front moves to index 1."
},

{
    front:1,
    rear:3,
    active:3,
    explanation:
    "Insert 40 at position 3."
},

{
    front:1,
    rear:4,
    active:4,
    explanation:
    "Insert 50 at position 4."
},

{
    front:1,
    rear:0,
    active:0,
    explanation:
    "Rear wraps around to index 0 due to circular nature."
}

];

let currentCqStep = 0;

function renderCq()
{
    const arrayContainer =
    document.getElementById(
        "cqArrayContainer"
    );

    arrayContainer.innerHTML = "";

    const step =
    cqSteps[currentCqStep];

    document
    .getElementById(
        "cqStepCounter"
    )
    .textContent =
    `Step ${currentCqStep+1}/${cqSteps.length}`;

    document
    .getElementById(
        "cqExplanation"
    )
    .textContent =
    step.explanation;

    document
    .getElementById(
        "cqPointers"
    )
    .textContent =
    `Front = ${step.front} | Rear = ${step.rear}`;

    cqArr.forEach((value,index)=>{

        arrayContainer.innerHTML += `

        <div class="
        w-16 h-16
        rounded-xl
        shadow-lg
        flex
        flex-col
        items-center
        justify-center
        text-lg
        font-bold

        ${
            index===step.active
            ?
            "bg-orange-500 text-white"
            :
            "bg-orange-100"
        }
        ">

        ${value}

        <span class="text-xs">

        ${index}

        </span>

        </div>

        `;

    });

}
document
.getElementById("cqPrevBtn")
.addEventListener("click",()=>{

    if(currentCqStep > 0)
    {
        currentCqStep--;

        renderCq();
    }

});

document
.getElementById("cqNextBtn")
.addEventListener("click",()=>{

    if(currentCqStep < cqSteps.length-1)
    {
        currentCqStep++;

        renderCq();
    }

});

document
.getElementById("cqResetBtn")
.addEventListener("click",()=>{

    currentCqStep = 0;

    renderCq();

});

//======sliding window maximum====
const swmArr = [1,3,-1,-3,5,3,6,7];

const swmSteps = [

{
    current:0,
    deque:[0],
    explanation:
    "Insert index 0 into deque."
},

{
    current:1,
    deque:[1],
    explanation:
    "Remove index 0 because 3 is greater than 1. Push index 1."
},

{
    current:2,
    deque:[1,2],
    explanation:
    "Push index 2. First window is complete and maximum is 3."
},

{
    current:3,
    deque:[1,2,3],
    explanation:
    "Push index 3. Deque keeps indices in decreasing order."
},

{
    current:4,
    deque:[4],
    explanation:
    "Remove expired index 1 and smaller values. Push index 4. Maximum becomes 5."
},

{
    current:5,
    deque:[4,5],
    explanation:
    "Push index 5 because 3 is smaller than current maximum 5."
},

{
    current:6,
    deque:[6],
    explanation:
    "Remove smaller values 3 and 5. Push index 6. Maximum becomes 6."
},

{
    current:7,
    deque:[7],
    explanation:
    "Remove 6 because 7 is larger. Push index 7. Maximum becomes 7."
}

];

let currentSwmStep = 0;

function renderSwm()
{
    const arrayContainer =
    document.getElementById(
        "swmArrayContainer"
    );

    const dequeContainer =
    document.getElementById(
        "swmDequeContainer"
    );

    arrayContainer.innerHTML = "";
    dequeContainer.innerHTML = "";

    const step =
    swmSteps[currentSwmStep];

    document
    .getElementById(
        "swmStepCounter"
    )
    .textContent =
    `Step ${currentSwmStep+1}/${swmSteps.length}`;

    document
    .getElementById(
        "swmExplanation"
    )
    .textContent =
    step.explanation;

    swmArr.forEach((value,index)=>{

        arrayContainer.innerHTML += `

        <div
        class="
        w-16 h-16
        rounded-xl
        shadow-lg
        flex
        flex-col
        items-center
        justify-center
        text-xl
        font-bold

        ${
            index===step.current
            ?
            "bg-orange-500 text-white"
            :
            step.deque.includes(index)
            ?
            "bg-yellow-300"
            :
            "bg-orange-100"
        }
        ">

        ${value}

        <span class="text-xs">
            ${index}
        </span>

        </div>

        `;

    });

    step.deque.forEach((value,index)=>{

        dequeContainer.innerHTML += `

        <div
        class="
        w-20 h-14
        rounded-xl
        shadow-lg
        flex
        items-center
        justify-center
        text-xl
        font-bold

        ${
            index===0
            ?
            "bg-orange-500 text-white"
            :
            "bg-orange-100"
        }
        ">

        ${value}

        </div>

        `;

    });

}
document
.getElementById("swmPrevBtn")
.addEventListener("click",()=>{

    if(currentSwmStep > 0)
    {
        currentSwmStep--;

        renderSwm();
    }

});

document
.getElementById("swmNextBtn")
.addEventListener("click",()=>{

    if(currentSwmStep < swmSteps.length-1)
    {
        currentSwmStep++;

        renderSwm();
    }

});

document
.getElementById("swmResetBtn")
.addEventListener("click",()=>{

    currentSwmStep = 0;

    renderSwm();

});
//=====Min Stack=====
const minStackSteps = [

{
    stack:[5],
    minStack:[5],
    explanation:
    "Push 5. Minimum element becomes 5."
},

{
    stack:[5,3],
    minStack:[5,3],
    explanation:
    "Push 3. Since 3 is smaller than 5, push it into min stack."
},

{
    stack:[5,3,7],
    minStack:[5,3],
    explanation:
    "Push 7. Minimum remains 3."
},

{
    stack:[5,3,7,2],
    minStack:[5,3,2],
    explanation:
    "Push 2. Since 2 is the new minimum, push it into min stack."
},

{
    stack:[5,3,7],
    minStack:[5,3],
    explanation:
    "Pop 2. Remove it from both stacks."
},

{
    stack:[5,3],
    minStack:[5,3],
    explanation:
    "Pop 7. Minimum remains 3."
}

];

let currentMinStackStep = 0;

function renderMinStack()
{
    const stackContainer =
    document.getElementById(
        "minStackContainer"
    );

    const minimumContainer =
    document.getElementById(
        "minimumStackContainer"
    );

    stackContainer.innerHTML = "";
    minimumContainer.innerHTML = "";

    const step =
    minStackSteps[currentMinStackStep];

    document
    .getElementById(
        "minStackStepCounter"
    )
    .textContent =
    `Step ${currentMinStackStep+1}/${minStackSteps.length}`;

    document
    .getElementById(
        "minStackExplanation"
    )
    .textContent =
    step.explanation;

    step.stack.forEach((value,index)=>{

        stackContainer.innerHTML += `

        <div
        class="
        w-20 h-14
        rounded-xl
        shadow-lg
        flex
        items-center
        justify-center
        text-xl
        font-bold

        ${
            index===step.stack.length-1
            ?
            "bg-orange-500 text-white"
            :
            "bg-orange-100"
        }
        ">

        ${value}

        </div>

        `;

    });

    step.minStack.forEach((value,index)=>{

        minimumContainer.innerHTML += `

        <div
        class="
        w-20 h-14
        rounded-xl
        shadow-lg
        flex
        items-center
        justify-center
        text-xl
        font-bold

        ${
            index===step.minStack.length-1
            ?
            "bg-green-500 text-white"
            :
            "bg-green-100"
        }
        ">

        ${value}

        </div>

        `;

    });

}
document
.getElementById("minStackPrevBtn")
.addEventListener("click",()=>{

    if(currentMinStackStep > 0)
    {
        currentMinStackStep--;

        renderMinStack();
    }

});

document
.getElementById("minStackNextBtn")
.addEventListener("click",()=>{

    if(currentMinStackStep < minStackSteps.length-1)
    {
        currentMinStackStep++;

        renderMinStack();
    }

});

document
.getElementById("minStackResetBtn")
.addEventListener("click",()=>{

    currentMinStackStep = 0;

    renderMinStack();

});

//=====graphs algorithm=====//
// ================= Graph Representation =================

const graphNodes = [
    { id: 0, x: 250, y: 50 },
    { id: 1, x: 150, y: 140 },
    { id: 2, x: 350, y: 140 },
    { id: 3, x: 150, y: 260 },
    { id: 4, x: 350, y: 260 }
];

const graphEdges = [
    [0,1],
    [0,2],
    [1,2],
    [1,3],
    [2,4],
    [3,4]
];

const adjacency = {
    0:[1,2],
    1:[0,2,3],
    2:[0,1,4],
    3:[1,4],
    4:[2,3]
};

const graphSteps = [

{
    node:0,
    explanation:"Node 0 is connected to nodes 1 and 2."
},

{
    node:1,
    explanation:"Node 1 is connected to nodes 0, 2 and 3."
},

{
    node:2,
    explanation:"Node 2 is connected to nodes 0, 1 and 4."
},

{
    node:3,
    explanation:"Node 3 is connected to nodes 1 and 4."
},

{
    node:4,
    explanation:"Node 4 is connected to nodes 2 and 3."
}

];

let currentGraphStep = 0;

function renderGraph()
{
    const svg =
    document.getElementById("graphSVG");

    svg.innerHTML = "";

    const step =
    graphSteps[currentGraphStep];

    // Draw Edges
    graphEdges.forEach(edge=>{

        const u =
        graphNodes.find(node=>node.id===edge[0]);

        const v =
        graphNodes.find(node=>node.id===edge[1]);

        svg.innerHTML += `
        <line
            x1="${u.x}"
            y1="${u.y}"
            x2="${v.x}"
            y2="${v.y}"
            stroke="#94A3B8"
            stroke-width="4"/>
        `;

    });

    // Draw Nodes
    graphNodes.forEach(node=>{

        let color =
        "#DBEAFE";

        if(node.id===step.node)
            color="#2563EB";

        else if(adjacency[step.node].includes(node.id))
            color="#93C5FD";

        svg.innerHTML += `

        <circle
            cx="${node.x}"
            cy="${node.y}"
            r="28"
            fill="${color}"
            stroke="#1E3A8A"
            stroke-width="3"/>

        <text
            x="${node.x}"
            y="${node.y+7}"
            text-anchor="middle"
            font-size="20"
            fill="white"
            font-weight="bold">

            ${node.id}

        </text>

        `;

    });

    document
    .getElementById("graphStepCounter")
    .textContent =
    `Step ${currentGraphStep+1}/${graphSteps.length}`;

    document
    .getElementById("graphExplanation")
    .textContent =
    step.explanation;

    const list =
    document.getElementById("adjacencyList");

    list.innerHTML = "";

    Object.keys(adjacency).forEach(key=>{

        list.innerHTML += `
        <div class="${
            Number(key)===step.node
            ?
            "text-blue-700 font-bold"
            :
            ""
        }">

        ${key} → ${adjacency[key].join(", ")}

        </div>
        `;

    });

}

// Previous
document
.getElementById("graphPrevBtn")
.addEventListener("click",()=>{

    if(currentGraphStep>0)
    {
        currentGraphStep--;

        renderGraph();
    }

});

// Next
document
.getElementById("graphNextBtn")
.addEventListener("click",()=>{

    if(currentGraphStep<graphSteps.length-1)
    {
        currentGraphStep++;

        renderGraph();
    }

});

// Reset
document
.getElementById("graphResetBtn")
.addEventListener("click",()=>{

    currentGraphStep=0;

    renderGraph();

});

// ================= BFS =================

const bfsSteps = [

{
current:0,
visited:[0],
queue:[1,2],
explanation:"Start BFS from node 0."
},

{
current:1,
visited:[0,1],
queue:[2,3],
explanation:"Visit node 1."
},

{
current:2,
visited:[0,1,2],
queue:[3,4],
explanation:"Visit node 2."
},

{
current:3,
visited:[0,1,2,3],
queue:[4],
explanation:"Visit node 3."
},

{
current:4,
visited:[0,1,2,3,4],
queue:[],
explanation:"Visit node 4. BFS Complete."
}

];

let currentBFSStep=0;

function renderBFS()
{

const svg=document.getElementById("bfsSVG");

svg.innerHTML="";

const step=bfsSteps[currentBFSStep];

graphEdges.forEach(edge=>{

const u=graphNodes.find(node=>node.id===edge[0]);

const v=graphNodes.find(node=>node.id===edge[1]);

svg.innerHTML+=`

<line
x1="${u.x}"
y1="${u.y}"
x2="${v.x}"
y2="${v.y}"
stroke="#94A3B8"
stroke-width="4"/>

`;

});

graphNodes.forEach(node=>{

let color="#DBEAFE";

if(step.visited.includes(node.id))
color="#60A5FA";

if(node.id===step.current)
color="#2563EB";

svg.innerHTML+=`

<circle
cx="${node.x}"
cy="${node.y}"
r="28"
fill="${color}"
stroke="#1E3A8A"
stroke-width="3"/>

<text
x="${node.x}"
y="${node.y+7}"
text-anchor="middle"
font-size="20"
fill="white"
font-weight="bold">

${node.id}

</text>

`;

});

document.getElementById("bfsStepCounter").textContent=
`Step ${currentBFSStep+1}/${bfsSteps.length}`;

document.getElementById("bfsExplanation").textContent=
step.explanation;
console.log(step.queue);

const queue = document.getElementById("bfsQueueContainer");

queue.innerHTML = "";

step.queue.forEach(node=>{
queue.innerHTML += `
<div class="w-12 h-12 rounded-lg bg-yellow-300 flex items-center justify-center font-bold">
${node}
</div>`;
console.log(queue.innerHTML);
});

const visited=document.getElementById("visitedContainer");

visited.innerHTML="";

step.visited.forEach(node=>{

visited.innerHTML+=`

<div class="
w-12
h-12
rounded-lg
bg-green-400
text-white
flex
items-center
justify-center
font-bold">

${node}

</div>

`;

});

}

document.getElementById("bfsPrevBtn").addEventListener("click",()=>{

if(currentBFSStep>0)
{
currentBFSStep--;

renderBFS();
}

});

document.getElementById("bfsNextBtn").addEventListener("click",()=>{

if(currentBFSStep<bfsSteps.length-1)
{
currentBFSStep++;

renderBFS();
}

});

document.getElementById("bfsResetBtn").addEventListener("click",()=>{

currentBFSStep=0;

renderBFS();

});

// ================= DFS =================

const dfsSteps=[

{
current:0,
visited:[0],
stack:[2,1],
explanation:"Start DFS from node 0."
},

{
current:1,
visited:[0,1],
stack:[2,3],
explanation:"Visit node 1."
},

{
current:3,
visited:[0,1,3],
stack:[2,4],
explanation:"Visit node 3."
},

{
current:4,
visited:[0,1,3,4],
stack:[2],
explanation:"Visit node 4."
},

{
current:2,
visited:[0,1,3,4,2],
stack:[],
explanation:"Visit node 2. DFS Complete."
}

];

let currentDFSStep=0;

function renderDFS()
{

const svg=document.getElementById("dfsSVG");

svg.innerHTML="";

const step=dfsSteps[currentDFSStep];

graphEdges.forEach(edge=>{

const u=graphNodes.find(node=>node.id===edge[0]);

const v=graphNodes.find(node=>node.id===edge[1]);

svg.innerHTML+=`

<line
x1="${u.x}"
y1="${u.y}"
x2="${v.x}"
y2="${v.y}"
stroke="#94A3B8"
stroke-width="4"/>

`;

});

graphNodes.forEach(node=>{

let color="#E9D5FF";

if(step.visited.includes(node.id))
color="#A855F7";

if(node.id===step.current)
color="#6D28D9";

svg.innerHTML+=`

<circle
cx="${node.x}"
cy="${node.y}"
r="28"
fill="${color}"
stroke="#4C1D95"
stroke-width="3"/>

<text
x="${node.x}"
y="${node.y+7}"
text-anchor="middle"
font-size="20"
fill="white"
font-weight="bold">

${node.id}

</text>

`;

});

document.getElementById("dfsStepCounter").textContent=
`Step ${currentDFSStep+1}/${dfsSteps.length}`;

document.getElementById("dfsExplanation").textContent=
step.explanation;

const stack=document.getElementById("dfsstackContainer");

stack.innerHTML="";

step.stack.forEach(node=>{

stack.innerHTML+=`

<div class="
w-12
h-12
rounded-lg
bg-yellow-300
flex
items-center
justify-center
font-bold">

${node}

</div>

`;

});

const visited=document.getElementById("dfsVisitedContainer");

visited.innerHTML="";

step.visited.forEach(node=>{

visited.innerHTML+=`

<div class="
w-12
h-12
rounded-lg
bg-green-500
text-white
flex
items-center
justify-center
font-bold">

${node}

</div>

`;

});

}

document.getElementById("dfsPrevBtn").addEventListener("click",()=>{

if(currentDFSStep>0)
{
currentDFSStep--;
renderDFS();
}

});

document.getElementById("dfsNextBtn").addEventListener("click",()=>{

if(currentDFSStep<dfsSteps.length-1)
{
currentDFSStep++;
renderDFS();
}

});

document.getElementById("dfsResetBtn").addEventListener("click",()=>{

currentDFSStep=0;
renderDFS();

});

//================ TOPOLOGICAL SORT ================

const topoSteps=[

{
current:0,
queue:[1,2],
order:[0],
explanation:"Start with node 0 having indegree 0."
},

{
current:1,
queue:[2],
order:[0,1],
explanation:"Remove node 1."
},

{
current:2,
queue:[3],
order:[0,1,2],
explanation:"Remove node 2."
},

{
current:3,
queue:[4],
order:[0,1,2,3],
explanation:"Remove node 3."
},

{
current:4,
queue:[],
order:[0,1,2,3,4],
explanation:"Topological Sort Completed."
}

];

let currentTopoStep=0;

function renderTopo(){

const svg=document.getElementById("topoSVG");

svg.innerHTML="";

const step=topoSteps[currentTopoStep];

graphEdges.forEach(edge=>{

const u=graphNodes.find(n=>n.id===edge[0]);

const v=graphNodes.find(n=>n.id===edge[1]);

svg.innerHTML+=`

<line
x1="${u.x}"
y1="${u.y}"
x2="${v.x}"
y2="${v.y}"
stroke="#94A3B8"
stroke-width="4"/>

`;

});

graphNodes.forEach(node=>{

let color="#DBEAFE";

if(step.order.includes(node.id))
color="#818CF8";

if(node.id===step.current)
color="#4338CA";

svg.innerHTML+=`

<circle
cx="${node.x}"
cy="${node.y}"
r="28"
fill="${color}"
stroke="#1E3A8A"
stroke-width="3"/>

<text
x="${node.x}"
y="${node.y+7}"
text-anchor="middle"
font-size="20"
fill="white"
font-weight="bold">

${node.id}

</text>

`;

});

document.getElementById("topoStepCounter").textContent=
`Step ${currentTopoStep+1}/${topoSteps.length}`;

document.getElementById("topoExplanation").textContent=
step.explanation;

const queue=document.getElementById("topoQueueContainer");

queue.innerHTML="";

step.queue.forEach(node=>{

queue.innerHTML+=`

<div class="w-12 h-12 rounded-lg bg-yellow-300 flex items-center justify-center font-bold">

${node}

</div>

`;

});

const order=document.getElementById("topoOrderContainer");

order.innerHTML="";

step.order.forEach(node=>{

order.innerHTML+=`

<div class="w-12 h-12 rounded-lg bg-green-500 text-white flex items-center justify-center font-bold">

${node}

</div>

`;

});

}

document.getElementById("topoPrevBtn").addEventListener("click",()=>{

if(currentTopoStep>0){

currentTopoStep--;

renderTopo();

}

});

document.getElementById("topoNextBtn").addEventListener("click",()=>{

if(currentTopoStep<topoSteps.length-1){

currentTopoStep++;

renderTopo();

}

});

document.getElementById("topoResetBtn").addEventListener("click",()=>{

currentTopoStep=0;

renderTopo();

});

//================ DIJKSTRA =================

const dijkstraSteps=[

{
current:0,
pq:["(0,0)"],
dist:[0,"∞","∞","∞","∞"],
explanation:"Start from source node 0."
},

{
current:1,
pq:["(2,2)","(4,1)"],
dist:[0,4,2,"∞","∞"],
explanation:"Relax neighbors of node 0."
},

{
current:2,
pq:["(3,4)","(4,1)"],
dist:[0,4,2,"∞",3],
explanation:"Visit node 2."
},

{
current:4,
pq:["(4,1)","(6,3)"],
dist:[0,4,2,6,3],
explanation:"Visit node 4."
},

{
current:1,
pq:["(5,3)"],
dist:[0,4,2,5,3],
explanation:"Shorter path found."
},

{
current:3,
pq:[],
dist:[0,4,2,5,3],
explanation:"Shortest paths finalized."
}

];

let currentDijkstraStep=0;

function renderDijkstra(){

const svg=document.getElementById("dijkstraSVG");

svg.innerHTML="";

const step=dijkstraSteps[currentDijkstraStep];

graphEdges.forEach(edge=>{

const u=graphNodes.find(n=>n.id===edge[0]);

const v=graphNodes.find(n=>n.id===edge[1]);

svg.innerHTML+=`
<line
x1="${u.x}"
y1="${u.y}"
x2="${v.x}"
y2="${v.y}"
stroke="#94A3B8"
stroke-width="4"/>
`;

});

graphNodes.forEach(node=>{

let color="#DBEAFE";

if(node.id===step.current)
color="#2563EB";

svg.innerHTML+=`
<circle
cx="${node.x}"
cy="${node.y}"
r="28"
fill="${color}"
stroke="#1E3A8A"
stroke-width="3"/>

<text
x="${node.x}"
y="${node.y+7}"
text-anchor="middle"
font-size="20"
fill="white"
font-weight="bold">

${node.id}

</text>
`;

});

document.getElementById("dijkstraStepCounter").textContent=
`Step ${currentDijkstraStep+1}/${dijkstraSteps.length}`;

document.getElementById("dijkstraExplanation").textContent=
step.explanation;

const pq=document.getElementById("pqContainer");

pq.innerHTML="";

step.pq.forEach(x=>{

pq.innerHTML+=`
<div class="w-16 h-12 rounded bg-yellow-300 flex justify-center items-center font-bold">
${x}
</div>
`;

});

const dist=document.getElementById("distanceContainer");

dist.innerHTML="";

step.dist.forEach((d,i)=>{

dist.innerHTML+=`
<div class="bg-green-500 text-white rounded p-3 font-bold">
${i}:${d}
</div>
`;

});

}

document.getElementById("dijkstraPrevBtn").onclick=()=>{

if(currentDijkstraStep>0){

currentDijkstraStep--;

renderDijkstra();

}

};

document.getElementById("dijkstraNextBtn").onclick=()=>{

if(currentDijkstraStep<dijkstraSteps.length-1){

currentDijkstraStep++;

renderDijkstra();

}

};

document.getElementById("dijkstraResetBtn").onclick=()=>{

currentDijkstraStep=0;

renderDijkstra();

};
//==================== DSU ====================

const dsuSteps=[

{
parent:[0,1,2,3,4],
explanation:"Initially every node is its own parent."
},

{
parent:[0,0,2,3,4],
explanation:"Union(0,1)"
},

{
parent:[0,0,2,2,4],
explanation:"Union(2,3)"
},

{
parent:[0,0,0,2,4],
explanation:"Union(0,2)"
},

{
parent:[0,0,0,0,4],
explanation:"Path Compression after Find(3)"
}

];

let currentDSUStep=0;

function renderDSU(){

const step=dsuSteps[currentDSUStep];

document.getElementById("dsuStepCounter").textContent=
`Step ${currentDSUStep+1}/${dsuSteps.length}`;

document.getElementById("dsuExplanation").textContent=
step.explanation;

const parent=document.getElementById("parentContainer");

parent.innerHTML="";

step.parent.forEach((p,i)=>{

parent.innerHTML+=`

<div class="bg-blue-600 text-white rounded-lg p-4 text-center">

<div class="font-bold">
Node ${i}
</div>

<div class="mt-2">
Parent : ${p}
</div>

</div>

`;

});

}

document.getElementById("dsuPrevBtn").onclick=()=>{

if(currentDSUStep>0){

currentDSUStep--;

renderDSU();

}

};

document.getElementById("dsuNextBtn").onclick=()=>{

if(currentDSUStep<dsuSteps.length-1){

currentDSUStep++;

renderDSU();

}

};

document.getElementById("dsuResetBtn").onclick=()=>{

currentDSUStep=0;

renderDSU();

};

//===================== CYCLE DETECTION =====================

const cycleSteps=[

{
current:0,
visited:[0],
parent:"-",
cycle:false,
edge:null,
explanation:"Start DFS from node 0."
},

{
current:1,
visited:[0,1],
parent:0,
cycle:false,
edge:null,
explanation:"Visit node 1."
},

{
current:3,
visited:[0,1,3],
parent:1,
cycle:false,
edge:null,
explanation:"Visit node 3."
},

{
current:2,
visited:[0,1,3,2],
parent:3,
cycle:false,
edge:null,
explanation:"Visit node 2."
},

{
current:0,
visited:[0,1,3,2],
parent:2,
cycle:true,
edge:[2,0],
explanation:"Visited node 0 again (not parent). Cycle Found!"
}

];

let currentCycleStep=0;

function renderCycle(){

const svg=document.getElementById("cycleSVG");

svg.innerHTML="";

const step=cycleSteps[currentCycleStep];

graphEdges.forEach(edge=>{

const u=graphNodes.find(n=>n.id===edge[0]);

const v=graphNodes.find(n=>n.id===edge[1]);

let color="#94A3B8";

if(step.edge &&
((edge[0]===step.edge[0]&&edge[1]===step.edge[1])||
(edge[0]===step.edge[1]&&edge[1]===step.edge[0])))
{
color="red";
}

svg.innerHTML+=`

<line
x1="${u.x}"
y1="${u.y}"
x2="${v.x}"
y2="${v.y}"
stroke="${color}"
stroke-width="5"/>

`;

});

graphNodes.forEach(node=>{

let color="#DBEAFE";

if(step.visited.includes(node.id))
color="#60A5FA";

if(node.id===step.current)
color="#2563EB";

svg.innerHTML+=`

<circle
cx="${node.x}"
cy="${node.y}"
r="28"
fill="${color}"
stroke="#1E3A8A"
stroke-width="3"/>

<text
x="${node.x}"
y="${node.y+7}"
text-anchor="middle"
font-size="20"
fill="white"
font-weight="bold">

${node.id}

</text>

`;

});

document.getElementById("cycleStepCounter").textContent=
`Step ${currentCycleStep+1}/${cycleSteps.length}`;

document.getElementById("cycleExplanation").textContent=
step.explanation;

const visited=document.getElementById("cycleVisitedContainer");

visited.innerHTML="";

step.visited.forEach(node=>{

visited.innerHTML+=`
<div class="w-12 h-12 rounded bg-green-500 text-white flex justify-center items-center font-bold">
${node}
</div>
`;

});

const parent=document.getElementById("cycleParentContainer");

parent.innerHTML=`
<div class="w-16 h-12 rounded bg-yellow-300 flex justify-center items-center font-bold">
${step.parent}
</div>
`;

const status=document.getElementById("cycleStatus");

status.innerHTML=step.cycle ?
"<span class='text-red-600'>❌ Cycle Found</span>" :
"<span class='text-green-600'>✅ No Cycle Yet</span>";

}

document.getElementById("cyclePrevBtn").onclick=()=>{

if(currentCycleStep>0){

currentCycleStep--;

renderCycle();

}

};

document.getElementById("cycleNextBtn").onclick=()=>{

if(currentCycleStep<cycleSteps.length-1){

currentCycleStep++;

renderCycle();

}

};

document.getElementById("cycleResetBtn").onclick=()=>{

currentCycleStep=0;

renderCycle();

};
//================ DIRECTED CYCLE DETECTION =================

const directedSteps=[

{
current:0,
visited:[0],
recStack:[0],
cycle:false,
explanation:"Start DFS from node 0."
},

{
current:1,
visited:[0,1],
recStack:[0,1],
cycle:false,
explanation:"Visit node 1."
},

{
current:2,
visited:[0,1,2],
recStack:[0,1,2],
cycle:false,
explanation:"Visit node 2."
},

{
current:3,
visited:[0,1,2,3],
recStack:[0,1,2,3],
cycle:false,
explanation:"Visit node 3."
},

{
current:1,
visited:[0,1,2,3],
recStack:[0,1,2,3],
cycle:true,
explanation:"Node 1 is already in recursion stack. Directed Cycle Found!"
}

];

let currentDirectedStep=0;

function renderDirectedCycle(){

const svg=document.getElementById("directedSVG");

svg.innerHTML="";

const step=directedSteps[currentDirectedStep];

graphEdges.forEach(edge=>{

const u=graphNodes.find(n=>n.id===edge[0]);
const v=graphNodes.find(n=>n.id===edge[1]);

svg.innerHTML+=`

<line
x1="${u.x}"
y1="${u.y}"
x2="${v.x}"
y2="${v.y}"
stroke="#94A3B8"
stroke-width="4"/>

`;

});

graphNodes.forEach(node=>{

let color="#DBEAFE";

if(step.visited.includes(node.id))
color="#60A5FA";

if(step.recStack.includes(node.id))
color="#F59E0B";

if(node.id===step.current)
color="#2563EB";

svg.innerHTML+=`

<circle
cx="${node.x}"
cy="${node.y}"
r="28"
fill="${color}"
stroke="#1E3A8A"
stroke-width="3"/>

<text
x="${node.x}"
y="${node.y+7}"
text-anchor="middle"
font-size="20"
fill="white"
font-weight="bold">

${node.id}

</text>

`;

});

document.getElementById("directedStepCounter").textContent=
`Step ${currentDirectedStep+1}/${directedSteps.length}`;

document.getElementById("directedExplanation").textContent=
step.explanation;

const visited=document.getElementById("directedVisitedContainer");
visited.innerHTML="";

step.visited.forEach(node=>{

visited.innerHTML+=`
<div class="w-12 h-12 rounded-lg bg-green-500 text-white flex items-center justify-center font-bold">
${node}
</div>
`;

});

const rec=document.getElementById("recStackContainer");
rec.innerHTML="";

step.recStack.forEach(node=>{

rec.innerHTML+=`
<div class="w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center font-bold">
${node}
</div>
`;

});

document.getElementById("currentNodeContainer").innerHTML=`
<div class="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
${step.current}
</div>
`;

document.getElementById("directedStatus").innerHTML=
step.cycle
? "<span class='text-red-600'>❌ Cycle Found</span>"
: "<span class='text-green-600'>✅ No Cycle Yet</span>";

}

document.getElementById("directedPrevBtn").onclick=()=>{

if(currentDirectedStep>0){

currentDirectedStep--;

renderDirectedCycle();

}

};

document.getElementById("directedNextBtn").onclick=()=>{

if(currentDirectedStep<directedSteps.length-1){

currentDirectedStep++;

renderDirectedCycle();

}

};

document.getElementById("directedResetBtn").onclick=()=>{

currentDirectedStep=0;

renderDirectedCycle();

};

//=======pattern algorithm====
const patternSteps=[

{
index:0,
matched:0,
text:"ABABCABC",
pattern:"ABC",
explanation:"Compare pattern starting at index 0."
},

{
index:2,
matched:3,
text:"ABABCABC",
pattern:"ABC",
explanation:"Pattern found at index 2."
},

{
index:5,
matched:3,
text:"ABABCABC",
pattern:"ABC",
explanation:"Pattern found at index 5."
}

];

let currentPatternStep=0;

function renderPattern(){

const step=patternSteps[currentPatternStep];

document.getElementById("patternStepCounter").textContent=
`Step ${currentPatternStep+1}/${patternSteps.length}`;

const text=document.getElementById("textContainer");

text.innerHTML="";

for(let i=0;i<step.text.length;i++){

let color="bg-gray-200";

if(i>=step.index && i<step.index+step.matched)
color="bg-green-400 text-white";

text.innerHTML+=`
<span class="${color} px-2 py-1 rounded mx-1 inline-block">
${step.text[i]}
</span>
`;

}

const pattern=document.getElementById("patternContainer");

pattern.innerHTML="";

for(let i=0;i<step.pattern.length;i++){

let color="bg-blue-500 text-white";

if(i<step.matched)
color="bg-green-500 text-white";

pattern.innerHTML+=`
<span class="${color} px-2 py-1 rounded mx-1 inline-block">
${step.pattern[i]}
</span>
`;

}

document.getElementById("patternExplanation").textContent=
step.explanation;

}

document.getElementById("patternPrevBtn").onclick=()=>{

if(currentPatternStep>0){

currentPatternStep--;

renderPattern();

}

};

document.getElementById("patternNextBtn").onclick=()=>{

if(currentPatternStep<patternSteps.length-1){

currentPatternStep++;

renderPattern();

}

};

document.getElementById("patternResetBtn").onclick=()=>{

currentPatternStep=0;

renderPattern();

};

//=======kmp visualizer====
const kmpSteps=[

{
text:"ABABDABACDABABCABAB",
pattern:"ABABCABAB",
matched:0,
index:0,
lps:[0,0,1,2,0,1,2,3,4],
explanation:"Start matching from index 0."
},

{
text:"ABABDABACDABABCABAB",
pattern:"ABABCABAB",
matched:4,
index:10,
lps:[0,0,1,2,0,1,2,3,4],
explanation:"Characters matched. Continue."
},

{
text:"ABABDABACDABABCABAB",
pattern:"ABABCABAB",
matched:9,
index:10,
lps:[0,0,1,2,0,1,2,3,4],
explanation:"Pattern found."
}

];

let currentKMPStep=0;

function renderKMP(){

const step=kmpSteps[currentKMPStep];

document.getElementById("kmpStepCounter").textContent=
`Step ${currentKMPStep+1}/${kmpSteps.length}`;

const text=document.getElementById("kmpTextContainer");

text.innerHTML="";

for(let i=0;i<step.text.length;i++){

let color="bg-gray-200";

if(i>=step.index && i<step.index+step.matched)
color="bg-green-500 text-white";

text.innerHTML+=`
<span class="${color} px-2 py-1 rounded mx-1 inline-block">
${step.text[i]}
</span>
`;

}

const pattern=document.getElementById("kmpPatternContainer");

pattern.innerHTML="";

for(let i=0;i<step.pattern.length;i++){

let color="bg-blue-500 text-white";

if(i<step.matched)
color="bg-green-500 text-white";

pattern.innerHTML+=`
<span class="${color} px-2 py-1 rounded mx-1 inline-block">
${step.pattern[i]}
</span>
`;

}

const lps=document.getElementById("lpsContainer");

lps.innerHTML="";

step.lps.forEach(value=>{

lps.innerHTML+=`
<div class="w-12 h-12 rounded-lg bg-purple-500 text-white flex items-center justify-center font-bold">
${value}
</div>
`;

});

document.getElementById("kmpExplanation").textContent=
step.explanation;

}
document.getElementById("kmpPrevBtn").onclick=()=>{

if(currentKMPStep>0){

currentKMPStep--;

renderKMP();

}

};

document.getElementById("kmpNextBtn").onclick=()=>{

if(currentKMPStep<kmpSteps.length-1){

currentKMPStep++;

renderKMP();

}

};

document.getElementById("kmpResetBtn").onclick=()=>{

currentKMPStep=0;

renderKMP();

};

//==== Rabin Carp=====
const rabinSteps=[

{
text:"ABABCABC",
pattern:"ABC",
index:0,
matched:0,
textHash:123,
patternHash:456,
explanation:"Hashes are different."
},

{
text:"ABABCABC",
pattern:"ABC",
index:2,
matched:3,
textHash:456,
patternHash:456,
explanation:"Hashes match. Verify characters."
},

{
text:"ABABCABC",
pattern:"ABC",
index:5,
matched:3,
textHash:456,
patternHash:456,
explanation:"Pattern found."
}

];

let currentRabinStep=0;
function renderRabin(){

const step=rabinSteps[currentRabinStep];

document.getElementById("rabinStepCounter").textContent=
`Step ${currentRabinStep+1}/${rabinSteps.length}`;

const text=document.getElementById("rabinTextContainer");
text.innerHTML="";

for(let i=0;i<step.text.length;i++){

let color="bg-gray-200";

if(i>=step.index&&i<step.index+step.matched)
color="bg-green-500 text-white";

text.innerHTML+=`
<div class="${color} w-10 h-10 rounded flex items-center justify-center font-bold">
${step.text[i]}
</div>
`;

}

const pattern=document.getElementById("rabinPatternContainer");
pattern.innerHTML="";

for(let ch of step.pattern){

pattern.innerHTML+=`
<div class="bg-blue-500 text-white w-10 h-10 rounded flex items-center justify-center font-bold">
${ch}
</div>
`;

}

document.getElementById("hashContainer").innerHTML=`

<div class="bg-yellow-200 px-4 py-2 rounded font-bold">
Pattern Hash : ${step.patternHash}
</div>

<div class="bg-green-200 px-4 py-2 rounded font-bold">
Text Hash : ${step.textHash}
</div>

`;

document.getElementById("rabinExplanation").textContent=
step.explanation;

}
document.getElementById("rabinPrevBtn").onclick=()=>{

if(currentRabinStep>0){

currentRabinStep--;

renderRabin();

}

};

document.getElementById("rabinNextBtn").onclick=()=>{

if(currentRabinStep<rabinSteps.length-1){

currentRabinStep++;

renderRabin();

}

};

document.getElementById("rabinResetBtn").onclick=()=>{

currentRabinStep=0;

renderRabin();

};
  ///====Z algorithm
  const zSteps=[

{
string:"aabxaabxcaabxaabxay",
current:1,
z:[0,1,0,0,4,1,0,0,0,8],
explanation:"Compute Z value at index 1."
},

{
string:"aabxaabxcaabxaabxay",
current:4,
z:[0,1,0,0,4,1,0,0,0,8],
explanation:"Longest prefix match starts at index 4."
},

{
string:"aabxaabxcaabxaabxay",
current:9,
z:[0,1,0,0,4,1,0,0,0,8],
explanation:"Largest Z value found."
}

];

let currentZStep=0;
function renderZ(){

const step=zSteps[currentZStep];

document.getElementById("zStepCounter").textContent=
`Step ${currentZStep+1}/${zSteps.length}`;

const string=document.getElementById("zStringContainer");
string.innerHTML="";

for(let i=0;i<step.string.length;i++){

let color="bg-gray-200";

if(i===step.current)
color="bg-blue-500 text-white";

string.innerHTML+=`
<div class="${color} w-10 h-10 rounded flex items-center justify-center font-bold">
${step.string[i]}
</div>
`;

}

const z=document.getElementById("zArrayContainer");

z.innerHTML="";

step.z.forEach((value,index)=>{

let color="bg-purple-500";

if(index===step.current)
color="bg-green-500";

z.innerHTML+=`
<div class="${color} text-white w-10 h-10 rounded flex items-center justify-center font-bold">
${value}
</div>
`;

});

document.getElementById("zExplanation").textContent=
step.explanation;

}
document.getElementById("zPrevBtn").onclick=()=>{

if(currentZStep>0){

currentZStep--;

renderZ();

}

};

document.getElementById("zNextBtn").onclick=()=>{

if(currentZStep<zSteps.length-1){

currentZStep++;

renderZ();

}

};

document.getElementById("zResetBtn").onclick=()=>{

currentZStep=0;

renderZ();

};

//'======manacher algorithm
const manacherSteps=[

{
string:"#a#b#a#b#a#",
current:2,
radius:[0,1,0,3,0,5,0,3,0,1,0],
explanation:"Expand around center."
},

{
string:"#a#b#a#b#a#",
current:5,
radius:[0,1,0,3,0,5,0,3,0,1,0],
explanation:"Largest palindrome centered here."
},

{
string:"#a#b#a#b#a#",
current:7,
radius:[0,1,0,3,0,5,0,3,0,1,0],
explanation:"Reuse previously computed radius."
}

];

let currentManacherStep=0;
function renderManacher(){

const step=manacherSteps[currentManacherStep];

document.getElementById("manacherStepCounter").textContent=
`Step ${currentManacherStep+1}/${manacherSteps.length}`;

const string=document.getElementById("manacherStringContainer");

string.innerHTML="";

for(let i=0;i<step.string.length;i++){

let color="bg-gray-200";

if(i===step.current)
color="bg-blue-600 text-white";

string.innerHTML+=`
<div class="${color} w-10 h-10 rounded flex items-center justify-center font-bold">
${step.string[i]}
</div>
`;

}

const radius=document.getElementById("radiusContainer");

radius.innerHTML="";

step.radius.forEach((value,index)=>{

let color="bg-purple-500";

if(index===step.current)
color="bg-green-500";

radius.innerHTML+=`
<div class="${color} text-white w-10 h-10 rounded flex items-center justify-center font-bold">
${value}
</div>
`;

});

document.getElementById("manacherExplanation").textContent=
step.explanation;

}
document.getElementById("manacherPrevBtn").onclick=()=>{

if(currentManacherStep>0){

currentManacherStep--;

renderManacher();

}

};

document.getElementById("manacherNextBtn").onclick=()=>{

if(currentManacherStep<manacherSteps.length-1){

currentManacherStep++;

renderManacher();

}

};

document.getElementById("manacherResetBtn").onclick=()=>{

currentManacherStep=0;

renderManacher();

};
//===recursion basic 
const recursionSteps=[

{
stack:["fact(4)"],
explanation:"Initial function call."
},

{
stack:["fact(4)","fact(3)"],
explanation:"Recursive call for n=3."
},

{
stack:["fact(4)","fact(3)","fact(2)"],
explanation:"Recursive call for n=2."
},

{
stack:["fact(4)","fact(3)","fact(2)","fact(1)"],
explanation:"Base case reached."
},

{
stack:["fact(4)","fact(3)","fact(2)"],
explanation:"Returning from fact(1)."
},

{
stack:["fact(4)","fact(3)"],
explanation:"Returning from fact(2)."
},

{
stack:["fact(4)"],
explanation:"Returning from fact(3)."
},

{
stack:[],
explanation:"Recursion completed."
}

];

let currentRecursionStep=0;
function renderRecursion(){

const step=recursionSteps[currentRecursionStep];

document.getElementById("recursionStepCounter").textContent=
`Step ${currentRecursionStep+1}/${recursionSteps.length}`;

const stack=document.getElementById("callStackContainer");

stack.innerHTML="";

step.stack.slice().reverse().forEach(call=>{

stack.innerHTML+=`
<div class="w-56 h-12 bg-blue-500 text-white rounded flex items-center justify-center font-bold shadow">
${call}
</div>
`;

});

document.getElementById("recursionExplanation").textContent=
step.explanation;

}
document.getElementById("recursionPrevBtn").onclick=()=>{

if(currentRecursionStep>0){

currentRecursionStep--;

renderRecursion();

}

};

document.getElementById("recursionNextBtn").onclick=()=>{

if(currentRecursionStep<recursionSteps.length-1){

currentRecursionStep++;

renderRecursion();

}

};

document.getElementById("recursionResetBtn").onclick=()=>{

currentRecursionStep=0;

renderRecursion();

};
///====backtracking 
const backtrackingSteps=[

{
path:[],
decision:"Start",
explanation:"Begin exploring."
},

{
path:[1],
decision:"Choose 1",
explanation:"Pick 1."
},

{
path:[1,2],
decision:"Choose 2",
explanation:"Continue exploring."
},

{
path:[1,2,3],
decision:"Choose 3",
explanation:"Valid solution found."
},

{
path:[1,2],
decision:"Backtrack",
explanation:"Remove 3 and try another option."
},

{
path:[1],
decision:"Backtrack",
explanation:"Remove 2."
},

{
path:[],
decision:"Finished",
explanation:"All possibilities explored."
}

];

let currentBacktrackingStep=0;

function renderBacktracking(){

const step=backtrackingSteps[currentBacktrackingStep];

document.getElementById("backtrackingStepCounter").textContent=
`Step ${currentBacktrackingStep+1}/${backtrackingSteps.length}`;

const path=document.getElementById("pathContainer");

path.innerHTML="";

step.path.forEach(node=>{

path.innerHTML+=`
<div class="w-12 h-12 rounded-lg bg-green-500 text-white flex items-center justify-center font-bold">
${node}
</div>
`;

});

document.getElementById("decisionContainer").textContent=
step.decision;

document.getElementById("backtrackingExplanation").textContent=
step.explanation;

}
document.getElementById("backtrackingPrevBtn").onclick=()=>{

if(currentBacktrackingStep>0){

currentBacktrackingStep--;

renderBacktracking();

}

};

document.getElementById("backtrackingNextBtn").onclick=()=>{

if(currentBacktrackingStep<backtrackingSteps.length-1){

currentBacktrackingStep++;

renderBacktracking();

}

};

document.getElementById("backtrackingResetBtn").onclick=()=>{

currentBacktrackingStep=0;

renderBacktracking();

};
//=====subsset ===
const subsetSteps=[

{
subset:[],
explanation:"Start with an empty subset."
},

{
subset:[1],
explanation:"Include 1."
},

{
subset:[1,2],
explanation:"Include 2."
},

{
subset:[1,2,3],
explanation:"Include 3. One subset generated."
},

{
subset:[1,2],
explanation:"Backtrack by removing 3."
},

{
subset:[1],
explanation:"Backtrack by removing 2."
},

{
subset:[1,3],
explanation:"Include 3."
},

{
subset:[],
explanation:"Explore remaining subsets."
}

];

let currentSubsetStep=0;
function renderSubset(){

const step=subsetSteps[currentSubsetStep];

document.getElementById("subsetStepCounter").textContent=
`Step ${currentSubsetStep+1}/${subsetSteps.length}`;

const container=document.getElementById("subsetContainer");

container.innerHTML="";

if(step.subset.length===0){

container.innerHTML=`
<div class="w-16 h-16 rounded-lg bg-gray-300 flex items-center justify-center font-bold">
∅
</div>
`;

}
else{

step.subset.forEach(num=>{

container.innerHTML+=`
<div class="w-16 h-16 rounded-lg bg-green-500 text-white flex items-center justify-center font-bold text-xl">
${num}
</div>
`;

});

}

document.getElementById("subsetExplanation").textContent=
step.explanation;

}
document.getElementById("subsetPrevBtn").onclick=()=>{

if(currentSubsetStep>0){

currentSubsetStep--;

renderSubset();

}

};

document.getElementById("subsetNextBtn").onclick=()=>{

if(currentSubsetStep<subsetSteps.length-1){

currentSubsetStep++;

renderSubset();

}

};

document.getElementById("subsetResetBtn").onclick=()=>{

currentSubsetStep=0;

renderSubset();

};
//=====N queens===
const nQueensSteps=[

{
board:[
["Q","","",""],
["","","",""],
["","","",""],
["","","",""]
],
explanation:"Place first queen."
},

{
board:[
["Q","","",""],
["","","Q",""],
["","","",""],
["","","",""]
],
explanation:"Place second queen."
},

{
board:[
["Q","","",""],
["","","Q",""],
["","","","Q"],
["","","",""]
],
explanation:"Place third queen."
},

{
board:[
["Q","","",""],
["","","Q",""],
["","","","Q"],
["","Q","",""]
],
explanation:"Valid solution found."
}

];

let currentNQueensStep=0;
function renderNQueens(){

const step=nQueensSteps[currentNQueensStep];

document.getElementById("nQueensStepCounter").textContent=
`Step ${currentNQueensStep+1}/${nQueensSteps.length}`;

const board=document.getElementById("nQueensBoard");

board.innerHTML="";

for(let i=0;i<4;i++){

for(let j=0;j<4;j++){

const dark=(i+j)%2;

board.innerHTML+=`
<div class="w-20 h-20 flex items-center justify-center text-4xl
${dark?"bg-green-500":"bg-yellow-100"}">
${step.board[i][j]}
</div>
`;

}

}

document.getElementById("nQueensExplanation").textContent=
step.explanation;

}

document.getElementById("nQueensPrevBtn").onclick=()=>{

if(currentNQueensStep>0){

currentNQueensStep--;

renderNQueens();

}

};

document.getElementById("nQueensNextBtn").onclick=()=>{

if(currentNQueensStep<nQueensSteps.length-1){

currentNQueensStep++;

renderNQueens();

}

};

document.getElementById("nQueensResetBtn").onclick=()=>{

currentNQueensStep=0;

renderNQueens();

};

//=====Soduku===
const sudokuSteps=[

{
board:[
[1,"","",""],
["","","",""],
["","","",""],
["","","",""]
],
explanation:"Fill the first empty cell."
},

{
board:[
[1,2,"",""],
["","","",""],
["","","",""],
["","","",""]
],
explanation:"Place 2."
},

{
board:[
[1,2,3,""],
["","","",""],
["","","",""],
["","","",""]
],
explanation:"Place 3."
},

{
board:[
[1,2,3,4],
["","","",""],
["","","",""],
["","","",""]
],
explanation:"First row solved."
}

];

let currentSudokuStep=0;
function renderSudoku(){

const step=sudokuSteps[currentSudokuStep];

document.getElementById("sudokuStepCounter").textContent=
`Step ${currentSudokuStep+1}/${sudokuSteps.length}`;

const board=document.getElementById("sudokuBoard");

board.innerHTML="";

for(let i=0;i<4;i++){

for(let j=0;j<4;j++){

board.innerHTML+=`
<div class="w-16 h-16 border flex items-center justify-center text-2xl font-bold bg-white">
${step.board[i][j]}
</div>
`;

}

}

document.getElementById("sudokuExplanation").textContent=
step.explanation;

}
document.getElementById("sudokuPrevBtn").onclick=()=>{

if(currentSudokuStep>0){

currentSudokuStep--;

renderSudoku();

}

};

document.getElementById("sudokuNextBtn").onclick=()=>{

if(currentSudokuStep<sudokuSteps.length-1){

currentSudokuStep++;

renderSudoku();

}

};

document.getElementById("sudokuResetBtn").onclick=()=>{

currentSudokuStep=0;

renderSudoku();

};
//======LL Traversal ====
const traversalSteps=[

{
current:0,
explanation:"Start from the head node."
},

{
current:1,
explanation:"Move to the next node."
},

{
current:2,
explanation:"Continue traversing."
},

{
current:3,
explanation:"Visit the last node."
}

];

let currentTraversalStep=0;

const linkedList=[10,20,30,40];
function renderTraversal(){

const step=traversalSteps[currentTraversalStep];

document.getElementById("traversalStepCounter").textContent=
`Step ${currentTraversalStep+1}/${traversalSteps.length}`;

const container=document.getElementById("linkedListContainer");

container.innerHTML="";

linkedList.forEach((value,index)=>{

container.innerHTML+=`

<div class="flex items-center">

<div
class="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold
${index===step.current?"bg-blue-600":"bg-gray-400"}">

${value}

</div>

${index<linkedList.length-1?'<div class="text-3xl mx-2">→</div>':""}

</div>

`;

});

document.getElementById("traversalExplanation").textContent=
step.explanation;

}
document.getElementById("traversalPrevBtn").onclick=()=>{

if(currentTraversalStep>0){

currentTraversalStep--;

renderTraversal();

}

};

document.getElementById("traversalNextBtn").onclick=()=>{

if(currentTraversalStep<traversalSteps.length-1){

currentTraversalStep++;

renderTraversal();

}

};

document.getElementById("traversalResetBtn").onclick=()=>{

currentTraversalStep=0;

renderTraversal();

};
//======Insertion===
const insertionSteps=[

{
list:[10,20,30],
newIndex:-1,
explanation:"Original linked list."
},

{
list:[10,20,30],
newIndex:2,
explanation:"Create a new node (25)."
},

{
list:[10,20,25,30],
newIndex:2,
explanation:"Insert the new node after 20."
}

];

let currentInsertionStep=0;
function renderInsertion(){

const step=insertionSteps[currentInsertionStep];

document.getElementById("insertionStepCounter").textContent=
`Step ${currentInsertionStep+1}/${insertionSteps.length}`;

const container=document.getElementById("insertionContainer");

container.innerHTML="";

step.list.forEach((value,index)=>{

const isNew=index===step.newIndex;

container.innerHTML+=`

<div class="flex items-center">

<div
class="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold
${isNew?"bg-green-600":"bg-blue-500"}">

${value}

</div>

${index<step.list.length-1?'<div class="text-3xl mx-2">→</div>':""}

</div>

`;

});

document.getElementById("insertionExplanation").textContent=
step.explanation;

}
document.getElementById("insertionPrevBtn").onclick=()=>{

if(currentInsertionStep>0){

currentInsertionStep--;

renderInsertion();

}

};

document.getElementById("insertionNextBtn").onclick=()=>{

if(currentInsertionStep<insertionSteps.length-1){

currentInsertionStep++;

renderInsertion();

}

};

document.getElementById("insertionResetBtn").onclick=()=>{

currentInsertionStep=0;

renderInsertion();

};
///====Deletion====
const deletionSteps=[

{
list:[10,20,30,40],
deleteIndex:-1,
explanation:"Original linked list."
},

{
list:[10,20,30,40],
deleteIndex:2,
explanation:"Select node 30 for deletion."
},

{
list:[10,20,40],
deleteIndex:-1,
explanation:"Node 30 removed. Previous node now points to 40."
}

];

let currentDeletionStep=0;

function renderDeletion(){

const step=deletionSteps[currentDeletionStep];

document.getElementById("deletionStepCounter").textContent=
`Step ${currentDeletionStep+1}/${deletionSteps.length}`;

const container=document.getElementById("deletionContainer");

container.innerHTML="";

step.list.forEach((value,index)=>{

const deleting=index===step.deleteIndex;

container.innerHTML+=`

<div class="flex items-center">

<div
class="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold
${deleting?"bg-red-600":"bg-blue-500"}">

${value}

</div>

${index<step.list.length-1?'<div class="text-3xl mx-2">→</div>':""}

</div>

`;

});

document.getElementById("deletionExplanation").textContent=
step.explanation;

}
document.getElementById("deletionPrevBtn").onclick=()=>{

if(currentDeletionStep>0){

currentDeletionStep--;

renderDeletion();

}

};

document.getElementById("deletionNextBtn").onclick=()=>{

if(currentDeletionStep<deletionSteps.length-1){

currentDeletionStep++;

renderDeletion();

}

};

document.getElementById("deletionResetBtn").onclick=()=>{

currentDeletionStep=0;

renderDeletion();

};
//====reverse LL
const reverseSteps=[

{
list:[10,20,30,40],
reverse:false,
explanation:"Original linked list."
},

{
list:[10],
reverse:true,
explanation:"Reverse first node."
},

{
list:[20,10],
reverse:true,
explanation:"20 now points to 10."
},

{
list:[30,20,10],
reverse:true,
explanation:"30 now points to 20."
},

{
list:[40,30,20,10],
reverse:true,
explanation:"Linked list completely reversed."
}

];

let currentReverseStep=0;

function renderReverse(){

const step=reverseSteps[currentReverseStep];

document.getElementById("reverseStepCounter").textContent=
`Step ${currentReverseStep+1}/${reverseSteps.length}`;

const container=document.getElementById("reverseContainer");

container.innerHTML="";

step.list.forEach((value,index)=>{

container.innerHTML+=`

<div class="flex items-center">

<div class="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">

${value}

</div>

${
index<step.list.length-1
?'<div class="text-3xl mx-2">←</div>'
:""
}

</div>

`;

});

document.getElementById("reverseExplanation").textContent=
step.explanation;

}
document.getElementById("reversePrevBtn").onclick=()=>{

if(currentReverseStep>0){

currentReverseStep--;

renderReverse();

}

};

document.getElementById("reverseNextBtn").onclick=()=>{

if(currentReverseStep<reverseSteps.length-1){

currentReverseStep++;

renderReverse();

}

};

document.getElementById("reverseResetBtn").onclick=()=>{

currentReverseStep=0;

renderReverse();

};
//====cycle detection===
const llCycleData = [

{
slowPos:0,
fastPos:0,
text:"Both slow and fast pointers start from the head."
},

{
slowPos:1,
fastPos:2,
text:"Slow moves one node while Fast moves two nodes."
},

{
slowPos:2,
fastPos:4,
text:"Pointers continue moving through the list."
},

{
slowPos:3,
fastPos:3,
text:"Both pointers meet. Cycle detected!"
}

];

let llCycleIndex = 0;

const llCycleNodes = [10,20,30,40,50];

function renderLinkedListCycle() {

    const step = llCycleData[llCycleIndex];

    const container = document.getElementById("llCycleContainer");

    if (!container) {
        console.log("cycleContainer not found");
        return;
    }

    document.getElementById("llCycleStepCounter").textContent =
        `Step ${llCycleIndex + 1}/${llCycleData.length}`;

    container.innerHTML = "";

    for (let i = 0; i < llCycleNodes.length; i++) {

        let color = "bg-blue-500";

        if (i === step.slowPos) color = "bg-green-500";

        if (i === step.fastPos) color = "bg-red-500";

        if (i === step.slowPos && i === step.fastPos)
            color = "bg-purple-600";

        container.innerHTML += `
        <div class="flex items-center">

            <div class="w-16 h-16 rounded-full ${color}
            text-white flex items-center justify-center font-bold">

                ${llCycleNodes[i]}

            </div>

            ${
                i < llCycleNodes.length - 1
                    ? `<div class="mx-2 text-3xl">→</div>`
                    : `<div class="mx-2 text-3xl text-red-500">↺</div>`
            }

        </div>
        `;
    }

    document.getElementById("llCycleExplanation").textContent =
        step.text;
}
document.getElementById("llCyclePrevBtn").onclick = ()=>{

if(llCycleIndex>0){

llCycleIndex--;

renderLinkedListCycle();

}

};

document.getElementById("llCycleNextBtn").onclick = ()=>{

if(llCycleIndex<llCycleData.length-1){

llCycleIndex++;

renderLinkedListCycle();

}

};

document.getElementById("llCycleResetBtn").onclick = ()=>{

llCycleIndex=0;

renderLinkedListCycle();

};

//=====activity===
const activitySteps=[

{
selected:[0],
text:"Select the activity that finishes first."
},

{
selected:[0,2],
text:"Choose the next compatible activity."
},

{
selected:[0,2,4],
text:"Choose the next activity that starts after the previous one ends."
},

{
selected:[0,2,4,5],
text:"Maximum number of non-overlapping activities selected."
}

];

let activityIndex=0;

const activityList=[

{start:1,end:2},

{start:2,end:5},

{start:4,end:6},

{start:6,end:7},

{start:5,end:8},

{start:8,end:9}

];
function renderActivitySelection(){

const step=activitySteps[activityIndex];

document.getElementById("activityStep").textContent=
`Step ${activityIndex+1}/${activitySteps.length}`;

const container=document.getElementById("activityContainer");

container.innerHTML="";

activityList.forEach((activity,index)=>{

const selected=step.selected.includes(index);

container.innerHTML+=`

<div class="w-28 h-24 rounded-lg
${selected?"bg-green-500":"bg-blue-500"}
text-white flex flex-col justify-center items-center font-bold">

<div>A${index+1}</div>

<div>${activity.start}-${activity.end}</div>

</div>

`;

});

document.getElementById("activityExplanation").textContent=
step.text;

}
document.getElementById("activityPrevBtn").onclick=()=>{

if(activityIndex>0){

activityIndex--;

renderActivitySelection();

}

};

document.getElementById("activityNextBtn").onclick=()=>{

if(activityIndex<activitySteps.length-1){

activityIndex++;

renderActivitySelection();

}

};

document.getElementById("activityResetBtn").onclick=()=>{

activityIndex=0;

renderActivitySelection();

};
////knapsack===
const knapsackItems=[

{weight:10,value:60},

{weight:20,value:100},

{weight:30,value:120}

];

const knapsackSteps=[

{
selected:[0],
text:"Pick Item 1 completely (highest value/weight ratio)."
},

{
selected:[0,1],
text:"Pick Item 2 completely."
},

{
selected:[0,1,2],
fraction:2/3,
text:"Only 20/30 weight of Item 3 fits, so take a fraction."
}

];

let knapsackIndex=0;
function renderKnapsack(){

const step=knapsackSteps[knapsackIndex];

document.getElementById("knapsackStep").textContent=
`Step ${knapsackIndex+1}/${knapsackSteps.length}`;

const container=document.getElementById("knapsackContainer");

container.innerHTML="";

knapsackItems.forEach((item,index)=>{

let label="";

if(step.selected.includes(index))
{

if(index===2 && step.fraction)
label=`${Math.round(step.fraction*100)}%`;

else
label="100%";

}

container.innerHTML+=`

<div class="w-40 rounded-lg p-4 text-center
${step.selected.includes(index)
?"bg-green-500 text-white"
:"bg-blue-500 text-white"}">

<h3 class="font-bold">Item ${index+1}</h3>

<p>W=${item.weight}</p>

<p>V=${item.value}</p>

<p>${label}</p>

</div>

`;

});

document.getElementById("knapsackExplanation").textContent=
step.text;

}
document.getElementById("knapsackPrevBtn").onclick=()=>{

if(knapsackIndex>0){

knapsackIndex--;

renderKnapsack();

}

};

document.getElementById("knapsackNextBtn").onclick=()=>{

if(knapsackIndex<knapsackSteps.length-1){

knapsackIndex++;

renderKnapsack();

}

};

document.getElementById("knapsackResetBtn").onclick=()=>{

knapsackIndex=0;

renderKnapsack();

};
//===huffman 
const huffmanSteps=[

{
nodes:["A(5)","B(9)","C(12)","D(13)"],
text:"Initial frequencies."
},

{
nodes:["AB(14)","C(12)","D(13)"],
text:"Combine A and B."
},

{
nodes:["CD(25)","AB(14)"],
text:"Combine C and D."
},

{
nodes:["ROOT(39)"],
text:"Combine remaining nodes to form the Huffman Tree."
}

];

let huffmanIndex=0;
function renderHuffman(){

const step=huffmanSteps[huffmanIndex];

document.getElementById("huffmanStep").textContent=
`Step ${huffmanIndex+1}/${huffmanSteps.length}`;

const container=document.getElementById("huffmanContainer");

container.innerHTML="";

step.nodes.forEach(node=>{

container.innerHTML+=`

<div class="w-32 h-20 bg-green-500 rounded-lg
text-white flex items-center justify-center
font-bold text-lg">

${node}

</div>

`;

});

document.getElementById("huffmanExplanation").textContent=
step.text;

}

document.getElementById("huffmanPrevBtn").onclick=()=>{

if(huffmanIndex>0){

huffmanIndex--;

renderHuffman();

}

};

document.getElementById("huffmanNextBtn").onclick=()=>{

if(huffmanIndex<huffmanSteps.length-1){

huffmanIndex++;

renderHuffman();

}

};

document.getElementById("huffmanResetBtn").onclick=()=>{

huffmanIndex=0;

renderHuffman();

};
///==job sequencing===
const jobSteps=[

{
selected:["J2"],
text:"Pick the highest profit job first."
},

{
selected:["J2","J1"],
text:"Schedule the next highest profit job before its deadline."
},

{
selected:["J2","J1","J4"],
text:"Fill the remaining available slot."
}

];

let jobIndex=0;

const jobs=[

{id:"J1",deadline:2,profit:100},

{id:"J2",deadline:1,profit:120},

{id:"J3",deadline:2,profit:60},

{id:"J4",deadline:3,profit:40}

];
function renderJob(){

const step=jobSteps[jobIndex];

document.getElementById("jobStep").textContent=
`Step ${jobIndex+1}/${jobSteps.length}`;

const container=document.getElementById("jobContainer");

container.innerHTML="";

jobs.forEach(job=>{

const selected=step.selected.includes(job.id);

container.innerHTML+=`

<div class="w-40 p-4 rounded-lg
${selected?"bg-green-500":"bg-blue-500"}
text-white text-center">

<h3 class="font-bold">${job.id}</h3>

<p>Deadline : ${job.deadline}</p>

<p>Profit : ${job.profit}</p>

</div>

`;

});

document.getElementById("jobExplanation").textContent=
step.text;

}
document.getElementById("jobPrevBtn").onclick=()=>{

if(jobIndex>0){

jobIndex--;

renderJob();

}

};

document.getElementById("jobNextBtn").onclick=()=>{

if(jobIndex<jobSteps.length-1){

jobIndex++;

renderJob();

}

};

document.getElementById("jobResetBtn").onclick=()=>{

jobIndex=0;

renderJob();

};
//====merge interval==
const mergeSteps=[

{
intervals:["[1,3]","[2,6]","[8,10]","[15,18]"],
merged:[],
text:"Original intervals."
},

{
intervals:["[1,3]","[2,6]","[8,10]","[15,18]"],
merged:["[1,6]"],
text:"Merge [1,3] and [2,6]."
},

{
intervals:["[8,10]","[15,18]"],
merged:["[1,6]","[8,10]"],
text:"No overlap with [8,10]."
},

{
intervals:["[15,18]"],
merged:["[1,6]","[8,10]","[15,18]"],
text:"Final merged intervals."
}

];

let mergeIndex=0;

function renderMerge(){

const step=mergeSteps[mergeIndex];

document.getElementById("mergeStep").textContent=
`Step ${mergeIndex+1}/${mergeSteps.length}`;

const container=document.getElementById("mergeContainer");

container.innerHTML="";

step.merged.forEach(interval=>{

container.innerHTML+=`
<div class="bg-green-500 text-white px-6 py-4 rounded-lg font-bold">
${interval}
</div>
`;

});

step.intervals.forEach(interval=>{

container.innerHTML+=`
<div class="bg-blue-500 text-white px-6 py-4 rounded-lg font-bold">
${interval}
</div>
`;

});

document.getElementById("mergeExplanation").textContent=
step.text;

}
document.getElementById("mergePrevBtn").onclick=()=>{

if(mergeIndex>0){

mergeIndex--;

renderMerge();

}

};

document.getElementById("mergeNextBtn").onclick=()=>{

if(mergeIndex<mergeSteps.length-1){

mergeIndex++;

renderMerge();

}

};

document.getElementById("mergeResetBtn").onclick=()=>{

mergeIndex=0;

renderMerge();

};
//=====min heap
const minHeapSteps=[

{
heap:[10],
text:"Insert 10."
},

{
heap:[10,20],
text:"Insert 20."
},

{
heap:[10,20,30],
text:"Insert 30."
},

{
heap:[5,10,30,20],
text:"Insert 5. It bubbles up to maintain the Min Heap property."
}

];

let minHeapIndex=0;
function renderMinHeap(){

const step=minHeapSteps[minHeapIndex];

document.getElementById("minHeapStep").textContent=
`Step ${minHeapIndex+1}/${minHeapSteps.length}`;

const container=document.getElementById("minHeapContainer");

container.innerHTML="";

step.heap.forEach(value=>{

container.innerHTML+=`

<div class="w-16 h-16 rounded-full bg-green-500
text-white flex items-center justify-center
font-bold text-xl">

${value}

</div>

`;

});

document.getElementById("minHeapExplanation").textContent=
step.text;

}
document.getElementById("minHeapPrevBtn").onclick=()=>{

if(minHeapIndex>0){

minHeapIndex--;

renderMinHeap();

}

};

document.getElementById("minHeapNextBtn").onclick=()=>{

if(minHeapIndex<minHeapSteps.length-1){

minHeapIndex++;

renderMinHeap();

}

};

document.getElementById("minHeapResetBtn").onclick=()=>{

minHeapIndex=0;

renderMinHeap();

};
//===max heap
const maxHeapSteps=[

{
heap:[40],
text:"Insert 40."
},

{
heap:[40,20],
text:"Insert 20."
},

{
heap:[40,20,30],
text:"Insert 30."
},

{
heap:[50,40,30,20],
text:"Insert 50. It bubbles up to become the root."
}

];

let maxHeapIndex=0;
function renderMaxHeap(){

const step=maxHeapSteps[maxHeapIndex];

document.getElementById("maxHeapStep").textContent=
`Step ${maxHeapIndex+1}/${maxHeapSteps.length}`;

const container=document.getElementById("maxHeapContainer");

container.innerHTML="";

step.heap.forEach(value=>{

container.innerHTML+=`

<div class="w-16 h-16 rounded-full bg-red-500
text-white flex items-center justify-center
font-bold text-xl">

${value}

</div>

`;

});

document.getElementById("maxHeapExplanation").textContent=
step.text;

}
document.getElementById("maxHeapPrevBtn").onclick=()=>{

if(maxHeapIndex>0){

maxHeapIndex--;

renderMaxHeap();

}

};

document.getElementById("maxHeapNextBtn").onclick=()=>{

if(maxHeapIndex<maxHeapSteps.length-1){

maxHeapIndex++;

renderMaxHeap();

}

};

document.getElementById("maxHeapResetBtn").onclick=()=>{

maxHeapIndex=0;

renderMaxHeap();

};
//====heapify====
const heapifySteps=[

{
heap:[40,30,20,10],
highlight:[],
text:"Initial heap."
},

{
heap:[10,30,20,40],
highlight:[0,1],
text:"Heapify starts at the root."
},

{
heap:[30,10,20,40],
highlight:[0,1],
text:"Swap parent with the largest child."
},

{
heap:[30,40,20,10],
highlight:[1,3],
text:"Continue heapifying the affected subtree."
},

{
heap:[40,30,20,10],
highlight:[0],
text:"Heap property restored."
}

];

let heapifyIndex=0;
function renderHeapify(){

const step=heapifySteps[heapifyIndex];

document.getElementById("heapifyStep").textContent=
`Step ${heapifyIndex+1}/${heapifySteps.length}`;

const container=document.getElementById("heapifyContainer");

container.innerHTML="";

step.heap.forEach((value,index)=>{

const active=step.highlight.includes(index);

container.innerHTML+=`

<div class="w-16 h-16 rounded-full
${active?"bg-yellow-500":"bg-blue-500"}
text-white flex items-center justify-center
font-bold text-xl">

${value}

</div>

`;

});

document.getElementById("heapifyExplanation").textContent=
step.text;

}
document.getElementById("heapifyPrevBtn").onclick=()=>{

if(heapifyIndex>0){

heapifyIndex--;

renderHeapify();

}

};

document.getElementById("heapifyNextBtn").onclick=()=>{

if(heapifyIndex<heapifySteps.length-1){

heapifyIndex++;

renderHeapify();

}

};

document.getElementById("heapifyResetBtn").onclick=()=>{

heapifyIndex=0;

renderHeapify();

};
//====heap sort===
const heapSortSteps=[

{
array:[40,30,20,10],
sorted:[],
text:"Initial Max Heap."
},

{
array:[30,10,20],
sorted:[40],
text:"Move the maximum element to the sorted portion."
},

{
array:[20,10],
sorted:[30,40],
text:"Heapify the remaining heap."
},

{
array:[10],
sorted:[20,30,40],
text:"Extract the next maximum."
},

{
array:[],
sorted:[10,20,30,40],
text:"Array completely sorted."
}

];

let heapSortIndex=0;

function renderHeapSort(){

const step=heapSortSteps[heapSortIndex];

document.getElementById("heapSortStep").textContent=
`Step ${heapSortIndex+1}/${heapSortSteps.length}`;

const container=document.getElementById("heapSortContainer");

container.innerHTML="";

step.array.forEach(value=>{

container.innerHTML+=`

<div class="w-16 h-16 rounded-full bg-blue-500
text-white flex items-center justify-center font-bold">

${value}

</div>

`;

});

step.sorted.forEach(value=>{

container.innerHTML+=`

<div class="w-16 h-16 rounded-full bg-green-500
text-white flex items-center justify-center font-bold">

${value}

</div>

`;

});

document.getElementById("heapSortExplanation").textContent=
step.text;

}

document.getElementById("heapSortPrevBtn").onclick=()=>{

if(heapSortIndex>0){

heapSortIndex--;

renderHeapSort();

}

};

document.getElementById("heapSortNextBtn").onclick=()=>{

if(heapSortIndex<heapSortSteps.length-1){

heapSortIndex++;

renderHeapSort();

}

};

document.getElementById("heapSortResetBtn").onclick=()=>{

heapSortIndex=0;

renderHeapSort();

};
///===priority queue===
const priorityQueueSteps=[

{
queue:[50],
text:"Insert 50."
},

{
queue:[50,40],
text:"Insert 40."
},

{
queue:[50,40,30],
text:"Insert 30."
},

{
queue:[40,30],
removed:50,
text:"Remove the highest priority element (50)."
},

{
queue:[30],
removed:40,
text:"Remove the next highest priority element (40)."
}

];

let priorityQueueIndex=0;
function renderPriorityQueue(){

const step=priorityQueueSteps[priorityQueueIndex];

document.getElementById("priorityQueueStep").textContent=
`Step ${priorityQueueIndex+1}/${priorityQueueSteps.length}`;

const container=document.getElementById("priorityQueueContainer");

container.innerHTML="";

step.queue.forEach(value=>{

container.innerHTML+=`

<div class="w-16 h-16 rounded-full bg-blue-500
text-white flex items-center justify-center
font-bold">

${value}

</div>

`;

});

if(step.removed!==undefined){

container.innerHTML+=`

<div class="w-20 h-20 rounded-full bg-red-500
text-white flex items-center justify-center
font-bold">

Out<br>${step.removed}

</div>

`;

}

document.getElementById("priorityQueueExplanation").textContent=
step.text;

}
document.getElementById("priorityQueuePrevBtn").onclick=()=>{

if(priorityQueueIndex>0){

priorityQueueIndex--;

renderPriorityQueue();

}

};

document.getElementById("priorityQueueNextBtn").onclick=()=>{

if(priorityQueueIndex<priorityQueueSteps.length-1){

priorityQueueIndex++;

renderPriorityQueue();

}

};

document.getElementById("priorityQueueResetBtn").onclick=()=>{

priorityQueueIndex=0;

renderPriorityQueue();

};
////Tree  preorder
const preorderSteps=[

{
visited:[1],
text:"Visit Root (1)."
},

{
visited:[1,2],
text:"Go to Left Child (2)."
},

{
visited:[1,2,4],
text:"Visit Left Child of 2 (4)."
},

{
visited:[1,2,4,5],
text:"Visit Right Child of 2 (5)."
},

{
visited:[1,2,4,5,3],
text:"Go to Right Child (3)."
},

{
visited:[1,2,4,5,3,6],
text:"Visit Left Child of 3 (6)."
},

{
visited:[1,2,4,5,3,6,7],
text:"Visit Right Child of 3 (7)."
}

];

let preorderIndex=0;

const preorderNodes=[1,2,3,4,5,6,7];
function renderPreorder(){

const step=preorderSteps[preorderIndex];

document.getElementById("preorderStep").textContent=
`Step ${preorderIndex+1}/${preorderSteps.length}`;

const container=document.getElementById("preorderContainer");

container.innerHTML="";

preorderNodes.forEach(node=>{

const color=step.visited.includes(node)?
"bg-green-500":"bg-blue-500";

container.innerHTML+=`

<div class="w-16 h-16 rounded-full ${color}
text-white flex items-center justify-center
font-bold text-xl">

${node}

</div>

`;

});

document.getElementById("preorderExplanation").textContent=
step.text;

}
document.getElementById("preorderPrevBtn").onclick=()=>{

if(preorderIndex>0){

preorderIndex--;

renderPreorder();

}

};

document.getElementById("preorderNextBtn").onclick=()=>{

if(preorderIndex<preorderSteps.length-1){

preorderIndex++;

renderPreorder();

}

};

document.getElementById("preorderResetBtn").onclick=()=>{

preorderIndex=0;

renderPreorder();

};
//===inorder
const inorderSteps=[

{
visited:[4],
text:"Visit leftmost node (4)."
},

{
visited:[4,2],
text:"Visit parent (2)."
},

{
visited:[4,2,5],
text:"Visit right child (5)."
},

{
visited:[4,2,5,1],
text:"Visit root (1)."
},

{
visited:[4,2,5,1,6],
text:"Visit left child of right subtree (6)."
},

{
visited:[4,2,5,1,6,3],
text:"Visit parent (3)."
},

{
visited:[4,2,5,1,6,3,7],
text:"Visit right child (7)."
}

];

let inorderIndex=0;

const inorderNodes=[1,2,3,4,5,6,7];

function renderInorder(){

const step=inorderSteps[inorderIndex];

document.getElementById("inorderStep").textContent=
`Step ${inorderIndex+1}/${inorderSteps.length}`;

const container=document.getElementById("inorderContainer");

container.innerHTML="";

inorderNodes.forEach(node=>{

const color=step.visited.includes(node)?
"bg-green-500":"bg-blue-500";

container.innerHTML+=`

<div class="w-16 h-16 rounded-full ${color}
text-white flex items-center justify-center
font-bold text-xl">

${node}

</div>

`;

});

document.getElementById("inorderExplanation").textContent=
step.text;

}

document.getElementById("inorderPrevBtn").onclick=()=>{

if(inorderIndex>0){

inorderIndex--;

renderInorder();

}

};

document.getElementById("inorderNextBtn").onclick=()=>{

if(inorderIndex<inorderSteps.length-1){

inorderIndex++;

renderInorder();

}

};

document.getElementById("inorderResetBtn").onclick=()=>{

inorderIndex=0;

renderInorder();

};

//===post order ==
const postorderSteps=[

{
visited:[4],
text:"Visit leftmost node (4)."
},

{
visited:[4,5],
text:"Visit right child (5)."
},

{
visited:[4,5,2],
text:"Visit parent (2)."
},

{
visited:[4,5,2,6],
text:"Visit left child (6)."
},

{
visited:[4,5,2,6,7],
text:"Visit right child (7)."
},

{
visited:[4,5,2,6,7,3],
text:"Visit parent (3)."
},

{
visited:[4,5,2,6,7,3,1],
text:"Finally visit the root (1)."
}

];

let postorderIndex=0;

const postorderNodes=[1,2,3,4,5,6,7];
function renderPostorder(){

const step=postorderSteps[postorderIndex];

document.getElementById("postorderStep").textContent=
`Step ${postorderIndex+1}/${postorderSteps.length}`;

const container=document.getElementById("postorderContainer");

container.innerHTML="";

postorderNodes.forEach(node=>{

const color=step.visited.includes(node)?
"bg-green-500":"bg-blue-500";

container.innerHTML+=`

<div class="w-16 h-16 rounded-full ${color}
text-white flex items-center justify-center
font-bold text-xl">

${node}

</div>

`;

});

document.getElementById("postorderExplanation").textContent=
step.text;

}
document.getElementById("postorderPrevBtn").onclick=()=>{

if(postorderIndex>0){

postorderIndex--;

renderPostorder();

}

};

document.getElementById("postorderNextBtn").onclick=()=>{

if(postorderIndex<postorderSteps.length-1){

postorderIndex++;

renderPostorder();

}

};

document.getElementById("postorderResetBtn").onclick=()=>{

postorderIndex=0;

renderPostorder();

};
//===level order==
const levelOrderSteps=[

{
visited:[1],
text:"Visit root node."
},

{
visited:[1,2,3],
text:"Visit all nodes at level 2."
},

{
visited:[1,2,3,4,5,6,7],
text:"Visit all nodes at level 3."
}

];

let levelOrderIndex=0;

const levelOrderNodes=[1,2,3,4,5,6,7];

function renderLevelOrder(){

const step=levelOrderSteps[levelOrderIndex];

document.getElementById("levelOrderStep").textContent=
`Step ${levelOrderIndex+1}/${levelOrderSteps.length}`;

const container=document.getElementById("levelOrderContainer");

container.innerHTML="";

levelOrderNodes.forEach(node=>{

const color=step.visited.includes(node)?
"bg-green-500":"bg-blue-500";

container.innerHTML+=`

<div class="w-16 h-16 rounded-full ${color}
text-white flex items-center justify-center
font-bold text-xl">

${node}

</div>

`;

});

document.getElementById("levelOrderExplanation").textContent=
step.text;

}
document.getElementById("levelOrderPrevBtn").onclick=()=>{

if(levelOrderIndex>0){

levelOrderIndex--;

renderLevelOrder();

}

};

document.getElementById("levelOrderNextBtn").onclick=()=>{

if(levelOrderIndex<levelOrderSteps.length-1){

levelOrderIndex++;

renderLevelOrder();

}

};

document.getElementById("levelOrderResetBtn").onclick=()=>{

levelOrderIndex=0;

renderLevelOrder();

};
//===LCA===
const lcaNodes=[1,2,3,4,5,6,7];

const lcaSteps=[

{
visited:[4],
lca:null,
text:"Start searching from node 4."
},

{
visited:[4,2],
lca:null,
text:"Move upward toward the root."
},

{
visited:[4,2,5],
lca:2,
text:"Both nodes 4 and 5 meet at node 2."
},

{
visited:[4,2,5,1],
lca:2,
text:"Traversal reaches root, but LCA is already found."
}

];

let lcaIndex=0;
function renderLCA(){

const step=lcaSteps[lcaIndex];

document.getElementById("lcaStep").textContent=
`Step ${lcaIndex+1}/${lcaSteps.length}`;

const container=document.getElementById("lcaContainer");

container.innerHTML="";

lcaNodes.forEach(node=>{

let color="bg-blue-500";

if(step.visited.includes(node))
color="bg-green-500";

if(step.lca===node)
color="bg-red-500";

container.innerHTML+=`

<div class="w-16 h-16 rounded-full ${color}
text-white flex items-center justify-center
font-bold text-xl">

${node}

</div>

`;

});

document.getElementById("lcaExplanation").textContent=
step.text;

}
document.getElementById("lcaPrevBtn").onclick=()=>{

if(lcaIndex>0){

lcaIndex--;

renderLCA();

}

};

document.getElementById("lcaNextBtn").onclick=()=>{

if(lcaIndex<lcaSteps.length-1){

lcaIndex++;

renderLCA();

}

};

document.getElementById("lcaResetBtn").onclick=()=>{

lcaIndex=0;

renderLCA();

};
//======memoization====

const memoSteps=[
{
memo:{},
text:"Start computing Fib(5). Memo table is empty."
},

{
memo:{1:1},
text:"Store Fib(1)=1."
},

{
memo:{1:1,2:1},
text:"Store Fib(2)=1."
},

{
memo:{1:1,2:1,3:2},
text:"Store Fib(3)=2."
},

{
memo:{1:1,2:1,3:2,4:3},
text:"Store Fib(4)=3."
},

{
memo:{1:1,2:1,3:2,4:3,5:5},
text:"Store Fib(5)=5. Future calls use cached values."
}

];

let memoIndex=0;
function renderMemoization(){

const step=memoSteps[memoIndex];

document.getElementById("memoStep").textContent=
`Step ${memoIndex+1}/${memoSteps.length}`;

const container=document.getElementById("memoContainer");

container.innerHTML="";

for(const key in step.memo){

container.innerHTML+=`

<div class="bg-blue-500 text-white
rounded-lg p-4 w-24 text-center">

<div class="font-bold">Fib(${key})</div>

<div>${step.memo[key]}</div>

</div>

`;

}

document.getElementById("memoExplanation").textContent=
step.text;

}
document.getElementById("memoPrevBtn").onclick=()=>{

if(memoIndex>0){

memoIndex--;

renderMemoization();

}

};

document.getElementById("memoNextBtn").onclick=()=>{

if(memoIndex<memoSteps.length-1){

memoIndex++;

renderMemoization();

}

};

document.getElementById("memoResetBtn").onclick=()=>{

memoIndex=0;

renderMemoization();

};
//====
const tabulationSteps=[

{
dp:[0],
current:0,
text:"Initialize dp[0]=0."
},

{
dp:[0,1],
current:1,
text:"Initialize dp[1]=1."
},

{
dp:[0,1,1],
current:2,
text:"dp[2]=dp[1]+dp[0]=1."
},

{
dp:[0,1,1,2],
current:3,
text:"dp[3]=dp[2]+dp[1]=2."
},

{
dp:[0,1,1,2,3],
current:4,
text:"dp[4]=dp[3]+dp[2]=3."
},

{
dp:[0,1,1,2,3,5],
current:5,
text:"dp[5]=dp[4]+dp[3]=5."
}

];

let tabulationIndex=0;
function renderTabulation(){

const step=tabulationSteps[tabulationIndex];

document.getElementById("tabulationStep").textContent=
`Step ${tabulationIndex+1}/${tabulationSteps.length}`;

const container=document.getElementById("tabulationContainer");

container.innerHTML="";

step.dp.forEach((value,index)=>{

const color=index===step.current
?"bg-green-500"
:"bg-blue-500";

container.innerHTML+=`

<div class="${color}
text-white
rounded-lg
w-20
h-20
flex
flex-col
justify-center
items-center">

<div class="text-sm">dp[${index}]</div>

<div class="font-bold">${value}</div>

</div>

`;

});

document.getElementById("tabulationExplanation").textContent=
step.text;

}
document.getElementById("tabulationPrevBtn").onclick=()=>{

if(tabulationIndex>0){

tabulationIndex--;

renderTabulation();

}

};

document.getElementById("tabulationNextBtn").onclick=()=>{

if(tabulationIndex<tabulationSteps.length-1){

tabulationIndex++;

renderTabulation();

}

};

document.getElementById("tabulationResetBtn").onclick=()=>{

tabulationIndex=0;

renderTabulation();

};
//==0/1 knapsack===
const DPknapsackSteps = [

{
    dp:[0,0,0,0,0],
    current:0,
    text:"Initialize DP table."
},

{
    dp:[0,3,3,3,3],
    current:1,
    text:"Take item 1 (weight=1, value=3)."
},

{
    dp:[0,3,4,7,7],
    current:2,
    text:"Process item 2 (weight=2, value=4)."
},

{
    dp:[0,3,4,7,8],
    current:3,
    text:"Process item 3 (weight=3, value=5)."
},

{
    dp:[0,3,4,7,8],
    current:4,
    text:"Maximum value for capacity 4 is 8."
}

];

let DPknapsackIndex = 0;

function renderDPKnapsack(){

    const step = DPknapsackSteps[DPknapsackIndex];

    document.getElementById("DPknapsackStep").textContent =
    `Step ${DPknapsackIndex+1}/${DPknapsackSteps.length}`;

    const container = document.getElementById("DPknapsackContainer");

    container.innerHTML = "";

    step.dp.forEach((value,index)=>{

        const color = index===step.current
        ? "bg-green-500"
        : "bg-blue-500";

        container.innerHTML += `
        <div class="${color}
        text-white
        rounded-lg
        w-20
        h-20
        flex
        flex-col
        justify-center
        items-center">

            <div class="text-sm">W=${index}</div>

            <div class="font-bold">${value}</div>

        </div>
        `;

    });

    document.getElementById("DPknapsackExplanation").textContent =
    step.text;
}

// Previous
document.getElementById("DPknapsackPrevBtn").onclick = ()=>{

    if(DPknapsackIndex>0){

        DPknapsackIndex--;

        renderDPKnapsack();

    }

};

// Next
document.getElementById("DPknapsackNextBtn").onclick = ()=>{

    if(DPknapsackIndex<DPknapsackSteps.length-1){

        DPknapsackIndex++;

        renderDPKnapsack();

    }

};

// Reset
document.getElementById("DPknapsackResetBtn").onclick = ()=>{

    DPknapsackIndex = 0;

    renderDPKnapsack();

};

///=====LCS===
const lcsSteps=[

{
row:[0,0,0,0],
current:0,
text:"Initialize first row of DP table."
},

{
row:[0,1,1,1],
current:1,
text:"Characters match → store 1."
},

{
row:[0,1,1,2],
current:2,
text:"Another match increases LCS length."
},

{
row:[0,1,2,2],
current:3,
text:"Take maximum from top or left."
},

{
row:[0,1,2,3],
current:3,
text:"Final LCS length = 3."
}

];

let lcsIndex=0;
function renderLCS(){

const step=lcsSteps[lcsIndex];

document.getElementById("lcsStep").textContent=
`Step ${lcsIndex+1}/${lcsSteps.length}`;

const container=document.getElementById("lcsContainer");

container.innerHTML="";

step.row.forEach((value,index)=>{

const color=index===step.current
?"bg-green-500"
:"bg-blue-500";

container.innerHTML+=`

<div class="${color}
text-white
rounded-lg
w-20
h-20
flex
flex-col
justify-center
items-center">

<div class="text-sm">Col ${index}</div>

<div class="font-bold">${value}</div>

</div>

`;

});

document.getElementById("lcsExplanation").textContent=
step.text;

}
document.getElementById("lcsPrevBtn").onclick=()=>{

if(lcsIndex>0){

lcsIndex--;

renderLCS();

}

};

document.getElementById("lcsNextBtn").onclick=()=>{

if(lcsIndex<lcsSteps.length-1){

lcsIndex++;

renderLCS();

}

};

document.getElementById("lcsResetBtn").onclick=()=>{

lcsIndex=0;

renderLCS();

};
//====LIS
const lisSteps=[

{
array:[10,9,2,5,3,7,101,18],
highlight:[10],
text:"Start with first element."
},

{
array:[10,9,2,5,3,7,101,18],
highlight:[2,5],
text:"Current increasing subsequence: 2 → 5"
},

{
array:[10,9,2,5,3,7,101,18],
highlight:[2,5,7],
text:"Extend subsequence: 2 → 5 → 7"
},

{
array:[10,9,2,5,3,7,101,18],
highlight:[2,5,7,101],
text:"Longest Increasing Subsequence found."
}

];

let lisIndex=0;

function renderLIS(){

const step=lisSteps[lisIndex];

document.getElementById("lisStep").textContent=
`Step ${lisIndex+1}/${lisSteps.length}`;

const container=document.getElementById("lisContainer");

container.innerHTML="";

step.array.forEach(value=>{

const color=step.highlight.includes(value)
?"bg-green-500"
:"bg-blue-500";

container.innerHTML+=`

<div class="${color}
text-white
w-16
h-16
rounded-lg
flex
items-center
justify-center
font-bold">

${value}

</div>

`;

});

document.getElementById("lisExplanation").textContent=
step.text;

}
document.getElementById("lisPrevBtn").onclick=()=>{

if(lisIndex>0){

lisIndex--;

renderLIS();

}

};

document.getElementById("lisNextBtn").onclick=()=>{

if(lisIndex<lisSteps.length-1){

lisIndex++;

renderLIS();

}

};

document.getElementById("lisResetBtn").onclick=()=>{

lisIndex=0;

renderLIS();

};

//