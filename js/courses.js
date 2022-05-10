$(document).ready(function () {
    $(".add-question").on('click', function () {
      addQuizs();
    });

    // Section Expended function
    $('.grid-builder-questions').on('click', 'a.quiz', function(e){
      $(this).parents('.collapse').next('.expended').show();
      $(this).parents('.collapse').hide();
    });

    // Section Collapsed function
    $('.grid-builder-questions').on('click','a.minimize', function (e) {
      const parentObj = $(this).parents('.expended');
      parentObj.prev('.collapse').show();

      parentObj.find("input.w-checkbox-input").each(function (index) {
        parentObj.prev('.collapse').find(".option-wrap").eq(index).toggleClass("correct", $(this).is(":checked"))
      });

      parentObj.hide();
    });

    // Both Collapse/Expend Section Deleted function at once
    $('.grid-builder-questions').on('click','a.delete-question', function (e) {
      var parentObj = $(this).parent();
      parentObj.prev('.collapse').remove();
      parentObj.remove();

      $(".grid-builder-questions > .collapse").each(function (index) {
        $(this).find(".quiz-builder-question-number").eq(0).html(`<div>Q${index + 1}</div>`)
      });

      $(".grid-builder-questions > .expended").each(function (index) {
        $(this).find(".quiz-builder-question-number").eq(0).html(`<div>Q${index + 1}</div>`)
      });
    });

    $(document).on('click','a.add-option', function (e) {
      var answerOptions = $(this).prev('.answer-options');
      const options = answerOptions.find(".option-wrap").length;

      answerOptions.append(`
        <div class="w-layout-grid option-wrap">
          <div class="quiz-builder-question-number options">
            <div>${String.fromCharCode(65 + options)}</div>
          </div>
          <div>
            <label for="email-3" class="question-header">Option Text</label>
            <input type="text" class="modal-input w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="" id="email-2" required="">
          </div>
          <div> </div>
          <label class="w-checkbox">
            <input type="checkbox" id="checkbox-option2" name="checkbox-option" data-name="Checkbox 4" class="w-checkbox-input">
            <span class="quiz-builder-label w-form-label" for="checkbox-option2">Correct Answer?</span>
          </label>
          <a href="#" class="repeater-button delete-option w-button">
            <span class="inline-leading-icon"><strong></strong></span>Delete Option
          </a>
        </div>
      `);

      const minizedOptions = $(this).parents('.quiz-builder-question-wrap.expended').prev('.collapse').find('.quiz-builder-question-minimized');
      minizedOptions.append(`
        <div class="w-layout-grid option-wrap">
          <div class="quiz-builder-question-number options">
            <div>${String.fromCharCode(65 + options)}</div>
          </div>
          <div>
            <label for="email-3" class="option-header">

            </label>
          </div>
        </div>
      `);
    });

    $(document).on('click','a.delete-option', function (e) {
      var parentObj = $(this).parent();
      var index = parentObj.index();
      var parentParentObj = parentObj.parent();
      parentObj.remove();

      parentParentObj.find('.option-wrap').each(function (i) {
        $(this).find('.quiz-builder-question-number').eq(0).html(`<div>${String.fromCharCode(65 + i)}</div>`)
      });

      var minizedOptions = parentParentObj.parents('.quiz-builder-question-wrap.expended').prev('.collapse');
      minizedOptions.find('.option-wrap').eq(index).remove();

      minizedOptions.find('.option-wrap').each(function (i) {
        $(this).find('.quiz-builder-question-number').eq(0).html(`<div>${String.fromCharCode(65 + i)}</div>`)
      });
    });

    $(document).on('change', 'input.repeater-input.w-input', function () {
      $(this).parents('.quiz-builder-question-wrap.expended').prev('.collapse').find('.question-header').eq(0).html($(this).val());
    });
    
    $(document).on('change', 'input.modal-input.w-input', function () {
      const index = $(this).parents('.option-wrap').index();
      $(this).parents('.quiz-builder-question-wrap.expended').prev('.collapse').find('.option-header').eq(index).html($(this).val());
    });

    //Sending form datas to endpoint via POST Request
    $(".save-button").on('click', function(e){
      saveAllDatas();
    });
});

function saveAllDatas() {
    var formData = $("#email-form").serializeArray();
    $.ajax({
      type: "POST",
      url: "/ENDPOINT",
      data: formData,
      success: function(response) {
        alert(response);  
      },
      error: function(response) {
        console.log(response);
      }
    });
}

function addQuizs() {
  var quizs = $(".grid-builder-questions > .collapse").length + 1;
  var appendFile = '';
  appendFile += `
    <div class="w-layout-grid quiz-builder-question-wrap collapse" style="display: none;">
      <div class="quiz-builder-question-number">
        <div>Q${quizs}</div>
      </div>
      <div class="quiz-builder-question-minimized">
        <label for="email-2" class="question-header"></label>
        <div class="w-layout-grid option-wrap">
          <div class="quiz-builder-question-number options">
            <div>A</div>
          </div>
          <div>
            <label for="email-3" class="option-header"></label>
          </div>
        </div>
      </div>
      <a href="#" class="button dashboard-body modal-button quiz w-button">
        <span class="inline-leading-icon"></span>Expand Question
      </a>
    </div>

    <div class="w-layout-grid quiz-builder-question-wrap expended">
      <div class="quiz-builder-question-number">
        <div>Q${quizs}</div>
      </div>
      <div class="quiz-builder-question">
        <label for="email-3" class="question-header">Question</label>
        <input type="text" class="repeater-input w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="" id="email-2" required="">
        <label for="email-3" class="question-header">Options</label>
        <div class="answer-options">
          <div class="w-layout-grid option-wrap">
            <div class="quiz-builder-question-number options">
              <div>A</div>
            </div>
            <div>
              <label for="email-3" class="question-header">Option Text</label>
              <input type="text" class="modal-input w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="" id="email-2" required="">
            </div>
            <div></div>
            <label class="w-checkbox">
              <input type="checkbox" id="checkbox-option1" name="checkbox-option" data-name="Checkbox 4" class="w-checkbox-input">
              <span class="quiz-builder-label w-form-label" for="checkbox-4">Correct Answer?</span>
            </label>
          </div>
        </div>
        <a href="#" class="repeater-button add-option w-button">
          <span class="inline-leading-icon"><strong></strong></span>Add Option
        </a>
      </div>
      <a href="#" class="repeater-button minimize w-button">
        <span class="inline-leading-icon"><strong></strong></span>Minimize Question
      </a>
      <a href="#" class="repeater-button delete-question w-button">
        <span class="inline-leading-icon"><strong></strong></span>Delete Question
      </a>
    </div>`;

  $(".grid-builder-questions").append(appendFile);
}
