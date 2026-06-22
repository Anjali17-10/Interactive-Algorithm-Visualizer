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

