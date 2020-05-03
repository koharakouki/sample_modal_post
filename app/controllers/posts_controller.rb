class PostsController < ApplicationController

	def index
		@post = Post.new
		@posts = Post.all
	end

	def create
	    @post = Post.new(post_params)
	    if @post.save
	    	respond_to do |format|
	    		format.html { redirect_to root_path }
	    		format.json
	    	end
	    else
	      render :error
	    end
	end

	private

	def post_params
		params.require(:post).permit(:body)
	end
end
