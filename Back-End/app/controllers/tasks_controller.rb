class TasksController < ApplicationController

#get /tasks 
# get a list of all tasks from database
def index
  user =@current_user
  tasks = user.tasks
  render json: tasks
end



#GET /tasks/:id
# get a single task from database by id
   def show
       #check if the task exits
   task = Task.find_by(id:params[:id])
   
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
  
    if task.valid?
      render json: task, status: :accepted
    else
      render json: { error: task.errors.full_messages }, status: :unprocessable_entity
    end
  end
  

   #PUT/PATCH /task/{:id}
   def update
    task = Task.find_by(id: params[:id])
  
    if task
      task.update(task_params)
      render json: task, status: :accepted
    else
      render json: { error: 'Task not found' }, status: :not_found
    end
  end
  

  #DELETE /task/{:id}
  def destroy
    task = Task.find_by(id: params[:id])
    #check iff task exists
    if task
        task.destroy
        render json: { message: 'Task successfully destroyed' }, status: :ok
    else
       render json: { error: "Task not found" }, status: :not_found
    end
end

private

def task_params
  params.require(:task).permit(:name, :description, :due_date, :status, :user_id)
end

end
