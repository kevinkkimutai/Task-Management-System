class TasksController < ApplicationController

#get /tasks 
# get a list of all tasks from database
    def index
        tasks = Task.all;
        render json: tasks, status: :ok
    end


#GET /tasks/:id
# get a single task from database by id
   def show
       #check if the task exits
   task = Task.find_by(id:param[:id])
   
   if task
       render json: task, status: :ok
   else
       #throw an error
       render json: { error: "Task not found" }, status: :not_found
   end
 end

 #POST /task 
 #create a new task
 def create
    task = Task.create(task_params)

    #check whether the task is valid
    if task.valid?
        #add the task to the db if its valid
        render json: task, status: :accepted
    else
        #throw an error
        render json: { error: "An error occured" }, status: :unprocessable_entity
    end
   end

   #PUT/PATCH /task/{:id}
   def update
    task = Task.find_by(id.params[:id])
    #if present
    if task
        task.update(task_params)
        render json: task, status: :accepted
    else
        render json: { error: 'Task not found' }, status: :not_found
    end
  end

  #DELETE /task/{:id}
  def destroy
    task = Task.find_by(id.params[:id])
    #check iff task exists
    if task
        task.destroy
        head :no_content
    else
       render json: { error: "Task not found" }, status: :not_found
    end
end

private
def task_params
    params.permit(:name, :description, :due_date, :user_id )

end
   

end
