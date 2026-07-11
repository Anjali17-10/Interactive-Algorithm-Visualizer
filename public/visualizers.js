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
