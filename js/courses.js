$(document).ready(function () {
    
  //add Question function
    $(".add-question").on('click', function () {
        var quizsCount = getQuizsCount();
        RenderAccordianarea(quizsCount);
    });

// Expended function
$('.grid-builder-questions').on('click', 'a.quiz', function(e){
    $(".grid-builder-questions").find(".expended").css("display", "none");
    $(".grid-builder-questions").find(".collapse").css("display", "block");
    $(this).parents('.collapse').next('.expended').css("display", "block");
    $(this).parents('.collapse').css("display", "none");
});


// Collapse function
$('.grid-builder-questions').on('click','a.minimize', function (e) {
    $(".grid-builder-questions").find(".collapse").css("display", "none");
    $(".grid-builder-questions").find(".expended").css("display", "block");
    $(this).parents('.expended').next('.collapse').css("display", "block");
    $(this).parents('.expended').css("display", "none");
});

$(document).on('click', 'input.w-checkbox-input', function(e){
    var checkedbox = Array.from(document.querySelectorAll(".w-checkbox-input")).find(chbx=>chbx!=e.target&&chbx.checked);
    if(checkedbox){
        $(checkedbox).prop('checked', false);
    }
    $(this).attr("checked",true);
 });
});
function getQuizsCount(){
    var quizs = $(".grid-builder-questions > .collapse");
    var quizsCount = parseInt(quizs.length);
    return quizsCount;
}

function RenderAccordianarea(quizsCount){
    var appendFile = '';
    const k= quizsCount;
    appendFile += 
        `<div id="w-node-_86f4356f-b9e5-12e3-8c89-35891eba50bb-bbbe96d4" class="w-layout-grid quiz-builder-question-wrap collapse">
            <div id="w-node-_58ade7b9-d8a5-4d37-1e12-a57e681ea8b9-bbbe96d4" class="quiz-builder-question-number">
            <div id="w-node-_121a5b3b-c8da-277a-bf3d-8cbd696ba5e3-bbbe96d4">Q`+ (k + 1) +`</div>
            </div>

            <div id="w-node-_8db722d7-adae-2408-ef7c-7eefc014bb53-bbbe96d4" class="quiz-builder-question-minimized">
                <label for="email-2" class="question-header">What is the answer to this question?</label>
                <div class="w-layout-grid option-wrap">
                    <div id="w-node-_036cd5dc-fafd-9056-f6c4-dd5c61f32c0a-bbbe96d4" class="quiz-builder-question-number options">
                        <div id="w-node-_036cd5dc-fafd-9056-f6c4-dd5c61f32c0b-bbbe96d4">A</div>
                    </div>
                    <div id="w-node-dc93aed9-81b2-bd7a-82b0-932a4e8e658b-bbbe96d4">
                        <label for="email-3" class="option-header">Answer One</label>
                    </div>
                </div>
                <div class="w-layout-grid option-wrap correct">
                    <div id="w-node-b5d1ecc7-5fa8-5ae1-28b5-1d601802c6df-bbbe96d4" class="quiz-builder-question-number options">
                        <div id="w-node-b5d1ecc7-5fa8-5ae1-28b5-1d601802c6e0-bbbe96d4">B</div>
                    </div>
                    <div id="w-node-b5d1ecc7-5fa8-5ae1-28b5-1d601802c6e2-bbbe96d4">
                        <label for="email-3" class="option-header">Answer Two</label>
                    </div>
                </div>
            </div>
            <a id="w-node-_155079ec-3884-ea4d-8d0a-2387b9881bdb-bbbe96d4" href="#" class="button dashboard-body modal-button quiz w-button"><span class="inline-leading-icon"></span>Expand Question</a>
        </div>

        <div id="w-node-_8db722d7-adae-2408-ef7c-7eefc014bb53-bbbe96d4" class="w-layout-grid quiz-builder-question-wrap expended" style="display:none;">
                <div id="w-node-ef986d02-1c34-986b-3f96-b916195a7846-bbbe96d4" class="quiz-builder-question-number">
                    <div id="w-node-ef986d02-1c34-986b-3f96-b916195a7847-bbbe96d4">Q`+ (k + 1) +`</div>
                    </div>
                    <div id="w-node-ef986d02-1c34-986b-3f96-b916195a7849-bbbe96d4" class="quiz-builder-question">
                    <label for="email-3" class="question-header">Question</label><input type="text" class="repeater-input w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="" id="email-2" required=""><label for="email-3" class="question-header">Options</label>
                        <div id="w-node-b91fbb19-bd92-b7e7-4916-f75eb41e806d-bbbe96d4" class="answer-options">
                            <div class="w-layout-grid option-wrap">
                                <div id="w-node-ef986d02-1c34-986b-3f96-b916195a7853-bbbe96d4" class="quiz-builder-question-number options">
                                <div id="w-node-ef986d02-1c34-986b-3f96-b916195a7854-bbbe96d4">A</div>
                                </div>
                                <div id="w-node-ef986d02-1c34-986b-3f96-b916195a7856-bbbe96d4"><label for="email-3" class="question-header">Option Text</label><input type="text" class="modal-input w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="" id="email-2" required=""></div>
                                <div id="w-node-ef986d02-1c34-986b-3f96-b916195a785a-bbbe96d4"> </div><label id="w-node-ef986d02-1c34-986b-3f96-b916195a785c-bbbe96d4" class="w-checkbox"><input type="checkbox" id="checkbox-4" name="checkbox-4" data-name="Checkbox 4" class="w-checkbox-input"><span class="quiz-builder-label w-form-label" for="checkbox-4">Correct Answer?</span></label>
                            </div>
                            <div class="w-layout-grid option-wrap">
                                <div id="w-node-ef986d02-1c34-986b-3f96-b916195a7861-bbbe96d4" class="quiz-builder-question-number options">
                                <div id="w-node-ef986d02-1c34-986b-3f96-b916195a7862-bbbe96d4">B</div>
                                </div>
                                <div id="w-node-ef986d02-1c34-986b-3f96-b916195a7864-bbbe96d4"><label for="email-3" class="question-header">Option Text</label><input type="text" class="modal-input w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="" id="email-2" required=""></div>
                                <div id="w-node-ef986d02-1c34-986b-3f96-b916195a7868-bbbe96d4"> </div><label id="w-node-ef986d02-1c34-986b-3f96-b916195a786a-bbbe96d4" class="w-checkbox"><input type="checkbox" id="checkbox-4" name="checkbox-4" data-name="Checkbox 4" class="w-checkbox-input"><span class="quiz-builder-label w-form-label" for="checkbox-4">Correct Answer?</span></label>
                                <a id="w-node-ef986d02-1c34-986b-3f96-b916195a786e-bbbe96d4" href="#" class="repeater-button delete-option w-button"><span class="inline-leading-icon"><strong></strong></span>Delete Option</a>
                            </div>
                        </div>
                    <a id="w-node-ef986d02-1c34-986b-3f96-b916195a7886-bbbe96d4" href="#" class="repeater-button add-option w-button"><span class="inline-leading-icon"><strong></strong></span>Add Option</a>
                    </div>
                    <a id="w-node-_0c2c5ac6-42eb-c16d-6c8b-ce5f5e9d9879-bbbe96d4" href="#" class="repeater-button minimize w-button"><span class="inline-leading-icon"><strong></strong></span>Minimize Question</a>
                    <a id="w-node-_8e196735-a74d-dcac-a62a-efc1c3fe9224-bbbe96d4" href="#" class="repeater-button delete-question w-button"><span class="inline-leading-icon"><strong></strong></span>Delete Question</a>
            </div>`;
        // }

        $(".grid-builder-questions .quiz-builder-question-wrap").parent('div').append(appendFile);
}
