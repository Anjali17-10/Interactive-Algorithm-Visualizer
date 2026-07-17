const algorithmDetails = {

"Binary Search":{

description:
"Binary Search is an efficient searching algorithm that repeatedly divides the search interval into half.",

code:
`int binarySearch(vector<int>& arr,int target){

int low=0,high=arr.size()-1;

while(low<=high){

int mid=(low+high)/2;

if(arr[mid]==target) return mid;

if(arr[mid]<target)

low=mid+1;

else

high=mid-1;

}

return -1;

}`,

complexity:"O(log n)"

},

"Linear Search":{

description:
"Linear Search scans every element until the target is found.",

code:
`for(int i=0;i<n;i++){

if(arr[i]==target)

return i;

}`,

complexity:"O(n)"

}

};

function showTopic(title, data) {

    document
    .getElementById("topicDetails")
    .classList.remove("hidden");

  document
.getElementById("topicTitle")
.textContent = `${title} Roadmap`;
document
.getElementById("topicInfo")
.textContent =
`${data.algorithms.length} Algorithms • ${data.questions.length} Practice Questions`;

    const algoList =
    document.getElementById("algorithmList");

    const questionList =
    document.getElementById("questionList");

    algoList.innerHTML = "";
    questionList.innerHTML = "";

data.algorithms.forEach(algo => {

algoList.innerHTML += `
<div
onclick='showAlgorithm("${algo}")'
class="bg-blue-50 p-4 rounded-lg shadow hover:shadow-lg transition hover:-translate-y-1 cursor-pointer">

    <div class="flex justify-between items-center">

        <div class="flex items-center gap-3">

            <span class="text-2xl">⚡</span>

            <h4 class="font-semibold text-gray-800">
                ${algo}
            </h4>

        </div>

        <span
        id="badge-${algo.replace(/\s+/g,'-')}"
        class="hidden bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">

            ✅ Completed

        </span>

    </div>

</div>`;
});
const user = JSON.parse(localStorage.getItem("user"));

if(user){

    fetch(`http://localhost:5000/api/progress/${user.email}`)
    .then(res => res.json())
    .then(progress => {

        progress.completed.forEach(item => {

            const badge = document.getElementById(
                "badge-" + item.replace(/\s+/g,'-')
            );

            if(badge){

                badge.classList.remove("hidden");

            }

        });

    });

}
data.questions.forEach(question => {

    questionList.innerHTML += `
    <a
        href="${question.link}"
        target="_blank"
        class="bg-white border p-4 rounded-lg shadow hover:shadow-lg transition hover:-translate-y-1 flex justify-between items-center gap-4">

        <div class="flex items-center gap-3 flex-1">

            <span class="text-2xl">
                ❓
            </span>

            <h4 class="font-semibold text-gray-800">
                ${question.name}
            </h4>

        </div>

        <span class="
            px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap
            ${
                question.difficulty === "Easy"
                ? "bg-green-100 text-green-700"
                : question.difficulty === "Medium"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }
        ">
            ${question.difficulty}
        </span>

    </a>`;
});
document
.getElementById("topicDetails")
.scrollIntoView({
    behavior: "smooth"
});
}
function showAlgorithm(name) 
{
document.getElementById("visualizer")
.classList.add("hidden");
document.getElementById("insertionVisualizer")
.classList.add("hidden");
///greedy
document.getElementById("activityVisualizer")
.classList.add("hidden");
document.getElementById("knapsackVisualizer")
.classList.add("hidden");
document.getElementById("huffmanVisualizer")
.classList.add("hidden");
document.getElementById("jobVisualizer")
.classList.add("hidden");
document.getElementById("mergeVisualizer")
.classList.add("hidden");
//===heaps==
document.getElementById("minHeapVisualizer")
.classList.add("hidden");
document.getElementById("maxHeapVisualizer")
.classList.add("hidden");
document.getElementById("heapifyVisualizer")
.classList.add("hidden");
document.getElementById("heapSortVisualizer")
.classList.add("hidden");

document.getElementById("priorityQueueVisualizer")
.classList.add("hidden");
//=====TREES===
document.getElementById("preorderVisualizer")
.classList.add("hidden");
document.getElementById("inorderVisualizer")
.classList.add("hidden");
document.getElementById("postorderVisualizer")
.classList.add("hidden");
document.getElementById("levelOrderVisualizer")
.classList.add("hidden");
document.getElementById("lcaVisualizer")
.classList.add("hidden");
//=====DP===
document.getElementById("memoizationVisualizer")
.classList.add("hidden");
document.getElementById("tabulationVisualizer")
.classList.add("hidden");
document.getElementById("DPknapsackVisualizer")
.classList.add("hidden");
document.getElementById("lcsVisualizer")
.classList.add("hidden");
document.getElementById("DPknapsackVisualizer")
.classList.add("hidden");
document.getElementById("lisVisualizer")
.classList.add("hidden");
//====
document.getElementById("llCycleVisualizer")
.classList.add("hidden");// linked list cycle
document.getElementById("subsetVisualizer")
.classList.add("hidden");
document.getElementById("traversalVisualizer")
.classList.add("hidden");
document.getElementById("deletionVisualizer")
.classList.add("hidden");
document.getElementById("reverseVisualizer")
.classList.add("hidden");
document.getElementById("nQueensVisualizer")
.classList.add("hidden");
document.getElementById("sudokuVisualizer")
.classList.add("hidden");
document.getElementById("recursionVisualizer")
.classList.add("hidden");
document.getElementById("kmpVisualizer")
.classList.add("hidden");
document.getElementById("zVisualizer")
.classList.add("hidden");
document.getElementById("cycleVisualizer")
.classList.add("hidden");

document.getElementById("backtrackingVisualizer")
.classList.add("hidden");
document.getElementById("slidingWindowVisualizer")
.classList.add("hidden");
document.getElementById("patternVisualizer")
.classList.add("hidden");
document.getElementById("manacherVisualizer")
.classList.add("hidden");
document
.getElementById("kadaneVisualizer")
.classList.add("hidden");
document.getElementById("directedCycleVisualizer")
.classList.add("hidden");

document
.getElementById("prefixVisualizer")
.classList.add("hidden");
 document
.getElementById("binaryAnswerVisualizer")
.classList.add("hidden");
document.getElementById("rabinVisualizer")
.classList.add("hidden");
document.getElementById("dsuVisualizer")
.classList.add("hidden");
document
.getElementById("minStackVisualizer")
.classList.add("hidden");
    document.getElementById("bfsVisualizer").classList.add("hidden");
    document.getElementById("dfsVisualizer").classList.add("hidden");
    document.getElementById("topoVisualizer")
.classList.add("hidden");

document.getElementById("dijkstraVisualizer")
.classList.add("hidden");
document
.getElementById("queueVisualizer")
.classList.add("hidden");

document
.getElementById("binaryVisualizer")
.classList.add("hidden");
document
.getElementById("lowerVisualizer")
.classList.add("hidden");
document
.getElementById("upperVisualizer")
.classList.add("hidden");
document
.getElementById("stackVisualizer")
.classList.add("hidden");

document
.getElementById("parenthesesVisualizer")
.classList.add("hidden");
document
.getElementById("ngeVisualizer")
.classList.add("hidden");
document
.getElementById("stockVisualizer")
.classList.add("hidden");

document
.getElementById("lrhVisualizer")
.classList.add("hidden");

document .getElementById("cqVisualizer") 
.classList.add("hidden");

document .getElementById("swmVisualizer")
.classList.add("hidden");

document
.getElementById("graphVisualizer")
.classList.add("hidden");

    const data = algorithmData[name];
document.getElementById("linearVisualizer").classList.add("hidden");

    if (!data) {
        alert("Algorithm data not added yet");
        return;
    }

    document
    .getElementById("algorithmDetails")
    .classList.remove("hidden");

   document
.getElementById("completeBtn")
.onclick=()=>markCompleted(name);

updateCompleteButton(name);

    document
    .getElementById("algorithmName")
    .textContent = name;

    document
    .getElementById("algorithmDescription")
    .textContent = data.description;

    document
    .getElementById("timeComplexity")
    .textContent = data.time;

    document
    .getElementById("spaceComplexity")
    .textContent = data.space;

    const problemsList =
    document.getElementById("problemsList");

    problemsList.innerHTML = "";

data.problems.forEach(problem => {

    problemsList.innerHTML += `
    <a
        href="${problem.link}"
        target="_blank"
        class="bg-blue-50 p-4 rounded-lg shadow hover:shadow-lg transition hover:-translate-y-1 block">

        <div class="flex justify-between items-center">

            <span class="font-medium text-gray-800">
                ${problem.name}
            </span>

            <span class="text-xl">
                🔗
            </span>

        </div>

    </a>`;
});

    document
    .getElementById("algorithmDetails")
    .scrollIntoView({
        behavior: "smooth"
    });

if(name === "Two Pointers")
{
    document.getElementById("visualizer")
    .classList.remove("hidden");

    renderArray();
}
if(name==="Reverse Linked List")
{
document.getElementById("reverseVisualizer")
.classList.remove("hidden");

renderReverse();
}
if(name==="Cycle Detection")
{
    document.getElementById("llCycleVisualizer")
    .classList.remove("hidden");

    renderLinkedListCycle();
}
if(name==="Activity Selection")
{
    document.getElementById("activityVisualizer")
    .classList.remove("hidden");

    renderActivitySelection();
}
if(name==="Fractional Knapsack")
{
    document.getElementById("knapsackVisualizer")
    .classList.remove("hidden");

    renderKnapsack();
}
if(name==="Huffman Coding")
{
document.getElementById("huffmanVisualizer")
.classList.remove("hidden");

renderHuffman();
}
if(name==="Job Sequencing")
{
    document.getElementById("jobVisualizer")
    .classList.remove("hidden");

    renderJob();
}
if(name==="Merge Intervals")
{
    document.getElementById("mergeVisualizer")
    .classList.remove("hidden");

    renderMerge();
}
if(name==="Min Heap")
{
    document.getElementById("minHeapVisualizer")
    .classList.remove("hidden");

    renderMinHeap();
}
if(name==="Max Heap")
{
document.getElementById("maxHeapVisualizer")
.classList.remove("hidden");

renderMaxHeap();
}
if(name==="Heapify")
{
    document.getElementById("heapifyVisualizer")
    .classList.remove("hidden");

    renderHeapify();
}
if(name==="Heap Sort")
{
document.getElementById("heapSortVisualizer")
.classList.remove("hidden");

renderHeapSort();
}
if(name==="Priority Queue")
{
    document.getElementById("priorityQueueVisualizer")
    .classList.remove("hidden");

    renderPriorityQueue();
}
if(name==="Preorder")
{
document.getElementById("preorderVisualizer")
.classList.remove("hidden");

renderPreorder();
}
if(name==="Inorder")
{
document.getElementById("inorderVisualizer")
.classList.remove("hidden");

renderInorder();
}
if(name==="Postorder")
{
document.getElementById("postorderVisualizer")
.classList.remove("hidden");

renderPostorder();
}
if(name==="Level Order")
{
document.getElementById("levelOrderVisualizer")
.classList.remove("hidden");

renderLevelOrder();
}
if(name==="LCA")
{
document.getElementById("lcaVisualizer")
.classList.remove("hidden");

renderLCA();
}
if(name==="Memoization")
{
document.getElementById("memoizationVisualizer")
.classList.remove("hidden");

renderMemoization();
}
if(name==="Tabulation")
{
document.getElementById("tabulationVisualizer")
.classList.remove("hidden");

renderTabulation();
}
if(name==="0/1 Knapsack")
{
    document.getElementById("DPknapsackVisualizer")
    .classList.remove("hidden");

    renderDPKnapsack();
}

if(name==="LCS")
{
document.getElementById("lcsVisualizer")
.classList.remove("hidden");

renderLCS();
}
if(name==="LIS")
{
document.getElementById("lisVisualizer")
.classList.remove("hidden");

renderLIS();
}

if(name==="Insertion")
{
document.getElementById("insertionVisualizer")
.classList.remove("hidden");

renderInsertion();
}
if(name==="Subset Generation")
{
document.getElementById("subsetVisualizer")
.classList.remove("hidden");

renderSubset();
}
if(name==="N Queens")
{
document.getElementById("nQueensVisualizer")
.classList.remove("hidden");

renderNQueens();
}
if(name==="Sudoku Solver")
{
document.getElementById("sudokuVisualizer")
.classList.remove("hidden");

renderSudoku();
}
if(name==="Traversal")
{
document.getElementById("traversalVisualizer")
.classList.remove("hidden");

renderTraversal();
}
if(name==="Deletion")
{
document.getElementById("deletionVisualizer")
.classList.remove("hidden");

renderDeletion();
}
if(name === "Sliding Window")
{
    document.getElementById("slidingWindowVisualizer")
    .classList.remove("hidden");

    renderWindow();
}
if(name === "Kadane Algorithm")
{
    document
    .getElementById("kadaneVisualizer")
    .classList.remove("hidden");

    renderKadane();
}
if(name === "Prefix Sum")
{
    document
    .getElementById("prefixVisualizer")
    .classList.remove("hidden");

    renderPrefix();
}
if(name==="Z Algorithm")
{
document.getElementById("zVisualizer")
.classList.remove("hidden");

renderZ();
}
if(name==="Manacher Algorithm")
{
document.getElementById("manacherVisualizer")
.classList.remove("hidden");

renderManacher();
}
if(name === "Linear Search")
{
    document
    .getElementById("linearVisualizer")
    .classList.remove("hidden");

    renderLinear();
}
if(name === "Binary Search")
{
    document
    .getElementById("binaryVisualizer")
    .classList.remove("hidden");

    renderBinary();
}
if(name==="Rabin-Karp")
{
document.getElementById("rabinVisualizer")
.classList.remove("hidden");

renderRabin();
}
if(name==="Rabin-Karp")
{
document.getElementById("rabinVisualizer")
.classList.remove("hidden");

renderRabin();
}
if(name === "Binary Search on Answer")
{
    document
    .getElementById("binaryAnswerVisualizer")
    .classList.remove("hidden");

    renderBinaryAnswer();
}
if(name === "Lower Bound")
{
    document
    .getElementById("lowerVisualizer")
    .classList.remove("hidden");

    renderLower();
}
if(name==="Recursion Basics")
{
document.getElementById("recursionVisualizer")
.classList.remove("hidden");

renderRecursion();
}
if(name === "Upper Bound")
{
    document
    .getElementById("upperVisualizer")
    .classList.remove("hidden");

    renderUpper();
}
if(name==="Backtracking")
{
document.getElementById("backtrackingVisualizer")
.classList.remove("hidden");

renderBacktracking();
}

if(name === "Stack Operations")
{
    document
    .getElementById("stackVisualizer")
    .classList.remove("hidden");

    renderStack();
}
if(name === "Queue Operations")
{
    document
    .getElementById("queueVisualizer")
    .classList.remove("hidden");

    renderQueue();
}
if(name === "Valid Parentheses")
{
    document
    .getElementById("parenthesesVisualizer")
    .classList.remove("hidden");

    renderParentheses();
}
if(name === "Next Greater Element")
{
    document
    .getElementById("ngeVisualizer")
    .classList.remove("hidden");

    renderNge();
}
if(name==="Pattern Matching")
{
document.getElementById("patternVisualizer")
.classList.remove("hidden");

renderPattern();
}
if(name === "Next Greater Element")
{
    document
    .getElementById("ngeVisualizer")
    .classList.remove("hidden");

    renderNge();
}
if(name === "Stock Span Problem")
{
    document
    .getElementById("stockVisualizer")
    .classList.remove("hidden");

    renderStock();
}
if(name==="KMP Algorithm")
{
document.getElementById("kmpVisualizer")
.classList.remove("hidden");

renderKMP();
}
if (name === "Preorder Traversal (Binary Tree)") {
  document.getElementById("preorderVisualizer").classList.remove("hidden");
  renderPreorder();
}
if(name === "Largest Rectangle Histogram")
{
    document
    .getElementById("lrhVisualizer")
    .classList.remove("hidden");

    renderLrh();
}
if(name === "Circular Queue") 
    { 
        document .getElementById("cqVisualizer") 
        .classList.remove("hidden");
         renderCq(); 
 }
if(name === "Sliding Window Maximum") { document .getElementById("swmVisualizer") .classList.remove("hidden"); renderSwm(); }
if(name === "Min Stack")
{
    document
    .getElementById("minStackVisualizer")
    .classList.remove("hidden");

    renderMinStack();
}
if(name === "Graph Representation")
{
    document
    .getElementById("graphVisualizer")
    .classList.remove("hidden");

    renderGraph();
}
if(name==="BFS")
{
document.getElementById("bfsVisualizer")
.classList.remove("hidden");

renderBFS();
}
if(name==="DFS")
{
document.getElementById("dfsVisualizer")
.classList.remove("hidden");

renderDFS();
}
if(name==="Topological Sort")
{
document.getElementById("topoVisualizer")
.classList.remove("hidden");

renderTopo();
}
if(name==="Dijkstra")
{
document.getElementById("dijkstraVisualizer")
.classList.remove("hidden");

renderDijkstra();
}
if(name==="DSU")
{
document.getElementById("dsuVisualizer")
.classList.remove("hidden");

renderDSU();
}
if(name==="Cycle Detection (Undirected)")
{
document.getElementById("cycleVisualizer")
.classList.remove("hidden");

renderCycle();
}
if(name==="Cycle Detection (Directed)")
{
document
.getElementById("directedCycleVisualizer")
.classList.remove("hidden");

renderDirectedCycle();
}

}
async function updateCompleteButton(algo){

    const user = JSON.parse(localStorage.getItem("user"));

    if(!user) return;

    try{

        const response = await fetch(
            `http://localhost:5000/api/progress/${user.email}`
        );

        const data = await response.json();

        const btn = document.getElementById("completeBtn");

        if(data.completed.includes(algo)){

            btn.innerHTML = "✅ Completed";
            btn.disabled = true;

            btn.classList.remove("bg-green-600");
            btn.classList.add("bg-gray-500");

        }
        else{

            btn.innerHTML = "✔ Mark as Completed";
            btn.disabled = false;

            btn.classList.remove("bg-gray-500");
            btn.classList.add("bg-green-600");

        }

    }catch(err){

        console.log(err);

    }

}
document
.getElementById("algorithmDetails")
.scrollIntoView({
    behavior: "smooth"
});
document
.getElementById("arraysCard")
.addEventListener("click", () => {

    showTopic("Arrays", arraysData);

});

document
.getElementById("stringsCard")
.addEventListener("click", () => {

    showTopic("Strings", stringsData);

});

document
.getElementById("recursionCard")
.addEventListener("click", () => {

    showTopic(
        "Recursion & Backtracking",
        recursionData
    );

});
document.getElementById("searchingCard")
.addEventListener("click", () => {
    showTopic("Searching", searchingData);
});

document.getElementById("linkedListCard")
.addEventListener("click", () => {
    showTopic("Linked List", linkedListData);
});

document.getElementById("stackQueueCard")
.addEventListener("click", () => {
    showTopic("Stack & Queue", stackQueueData);
});

document.getElementById("heapsCard")
.addEventListener("click", () => {
    showTopic("Heaps", heapsData);
});

document.getElementById("treesCard")
.addEventListener("click", () => {
    showTopic("Trees", treesData);
});

document.getElementById("graphsCard")
.addEventListener("click", () => {
    showTopic("Graphs", graphsData);
});

document.getElementById("greedyCard")
.addEventListener("click", () => {
    showTopic("Greedy Algorithms", greedyData);
});

document.getElementById("dpCard")
.addEventListener("click", () => {
    showTopic("Dynamic Programming", dpData);
});
const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("input", () => {

    const value =
    searchInput.value.toLowerCase();

    const cards = [
        "arraysCard",
        "stringsCard",
        "recursionCard",
        "searchingCard",
        "linkedListCard",
        "stackQueueCard",
        "heapsCard",
        "treesCard",
        "graphsCard",
        "greedyCard",
        "dpCard"
    ];

    cards.forEach(cardId => {

        const card =
        document.getElementById(cardId);

        const title =
        card.querySelector("h2")
        .textContent
        .toLowerCase();

        if (title.includes(value)) {

            card.style.display = "block";

        }
        else {

            card.style.display = "none";

        }

    });

});

const themeButton = document.getElementById("themeButton");

// Read saved theme
let darkMode = localStorage.getItem("theme") === "dark";

// Apply theme immediately when page loads
applyTheme();

themeButton.addEventListener("click", () => {

    darkMode = !darkMode;

    localStorage.setItem(
        "theme",
        darkMode ? "dark" : "light"
    );

    applyTheme();

});

function applyTheme() {

    if (darkMode) {

        // ===== Paste your EXISTING dark mode code here =====

        document.body.classList.remove("bg-blue-50");
        document.body.classList.add("bg-gray-900");
    // Navbar
        document.querySelector("nav").classList.remove("bg-white");
        document.querySelector("nav").classList.add("bg-gray-800");
           // Every white section/card
        document.querySelectorAll(".bg-white").forEach(el=>{
            el.classList.remove("bg-white");
            el.classList.add("bg-gray-800");
        });
        // ... all the rest of your current dark mode code ...
        document.querySelectorAll(".bg-blue-50").forEach(el=>{
            el.classList.remove("bg-blue-50");
            el.classList.add("bg-gray-700");
        });
        themeButton.textContent = "☀️ Light Mode";

    } else {

          document.body.classList.remove("bg-gray-900","text-white");
        document.body.classList.add("bg-blue-50");

        document.querySelector("nav").classList.remove("bg-gray-800");
        document.querySelector("nav").classList.add("bg-white");

        document.querySelectorAll(".bg-gray-800").forEach(el=>{
            if(el!==document.querySelector("nav")){
                el.classList.remove("bg-gray-800");
                el.classList.add("bg-white");
            }
        });

        document.querySelectorAll(".bg-gray-700").forEach(el=>{
            el.classList.remove("bg-gray-700");
            el.classList.add("bg-blue-50");
        });
        // ... all the rest of your current light mode code ...

        themeButton.textContent = "🌙 Dark Mode";

    }
}
function logout(){

    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("email");

    window.location.href = "index.html";
}
async function markCompleted(algorithm){

    const user = JSON.parse(localStorage.getItem("user"));

    if(!user){
        window.location.href = "login.html";
        return;
    }

    try{

        const response = await fetch(
            "http://localhost:5000/api/progress/complete",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: user.email,
                    algorithm
                })
            }
        );

        const data = await response.json();

        if(data.success){

            showToast("✅ " + algorithm + " marked as completed.");

            updateProgress(data.completed.length);

            updateCompleteButton(algorithm);
            const badge = document.getElementById(
    "badge-" + algorithm.replace(/\s+/g,'-')
);

if(badge){

    badge.classList.remove("hidden");

}

        }else{

            showToast(data.message);

        }

    }catch(error){

        console.log(error);

        showToast("❌ Server Error");

    }

}
function updateProgress(completed){

    const totalAlgorithms = 90;

    const percent = Math.round((completed/totalAlgorithms)*100);

    document.getElementById("progressCount").textContent =
        `${completed} / ${totalAlgorithms}`;

    document.getElementById("progressBar").style.width =
        percent+"%";

    document.getElementById("progressPercent").textContent =
        percent+"%";

}
async function loadUserProgress() {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) return;

    try {

        const response = await fetch(
            `http://localhost:5000/api/progress/${user.email}`
        );

        const data = await response.json();

        if (data.success) {

            updateProgress(data.completed.length);

        }

    } catch (error) {

        console.log(error);

    }

}
window.onload = function () {
    loadUserProgress();
};
function showToast(message){

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.remove("hidden");

    setTimeout(() => {

        toast.classList.add("hidden");

    }, 2500);

}
async function loadContinueLearning(){

    const user = JSON.parse(localStorage.getItem("user"));

    if(!user) return;

    const response = await fetch(
        `http://localhost:5000/api/progress/${user.email}`
    );

    const progress = await response.json();

    const completed = progress.completed;

    let next = null;

    for(const topic in roadmap){

        for(const algo of roadmap[topic].algorithms){

            if(!completed.includes(algo)){

                next = algo;
                break;

            }

        }

        if(next) break;

    }

    if(next){

        document
        .getElementById("continueLearning")
        .classList.remove("hidden");

        document
        .getElementById("nextAlgorithm")
        .textContent = next;

        document
        .getElementById("continueBtn")
        .onclick = ()=>showAlgorithm(next);

    }

}
loadContinueLearning();