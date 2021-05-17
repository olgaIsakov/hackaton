import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {

  constructor() { }
vm:any ;
  ngOnInit(): void {
  }


  function(){


    // Inject $scope dependency.
    AddCommentsController.$inject = ['$scope', '$timeout'];

    // Declare AddCommentsController.
    function AddCommentsController(this: any, $scope: { form: { $setPristine: () => void; }; }, $timeout: any) {
      this.vm = this;

      // Current comment.
      this.vm.comment = {};

      // Array where comments will be.
      this.vm.comments = [];

      // Fires when form is submited.
      this.vm.addComment = function() {

        // Add current date to the comment.
        this.vm.comment.date = Date.now();

        this.vm.comments.push( this.vm.comment );
        this.vm.comment = {};

        // Reset clases of the form after submit.
        $scope.form.$setPristine();
      }
    }
  }
}
