import React, {Component,PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createSomethingFromForm} from '../actions';

class EnterInfo extends Component
{
    //not sure about this one, it traverses up the heirarchy looking for a parent node that has a property called router
    //this looks like angular scope.parent.parent.....
    //how else could this be handled, you need a reference to the current router
    //you could create a module called current router and pass it in from app.js ?
    static contextTypes = {
       router:PropTypes.object
    };
    
    onSubmit(props){
        this.props.createSomethingFromForm(props)
        .then(()=>{
            //something was done succesfully, passed validation, do something
            this.context.router.push('/');
        });;
        
    }
    render(){
        
        const {fields:{title,categories,content},handleSubmit} = this.props; // == const handleSubmit = this.props.handleSubmit
                                                                            // == const title = this.props.fields.title
                                                                            // == const categories = this.props.fields.title
                                                                            // == const content = this.props.fields.content
        
        return(
            <div>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                Title
                {/* 
                   {...title} just takes all the properties off of title and puts them into the input 
                   if its an event then it registers it will the element
                    if you view source on the rendered input in the browser you will see it now has a name value when you didn't explicitly give it one
                    onChange = title.onChange
                */}
                <div className={`${title.touched && title.invalid ? 'invalid-class' : ''}`}>
                <input {...title} /><br/>
                <div>{title.touched ? title.error : ''}</div>
                </div>
                
                
                Categories
                <input {...categories}/><br/>
                Content
                <input {...content}/><br/>
                <button type="submit">Submit</button>
            </form>
            </div>
        );
    }
}

function validate(values){
    const errors = {};
    if(!values.title){
        errors.title = "enter title";
    }
    return errors;
    
}

//redux form just adds onto the normal way redux works
//1st argument is the form config, then the normal things that redux takes, 2nd mapStateToProps,3rd mapDispatchToProps
const formConfig = {
    form:'EnterInfoForm',
    fields:['title','categories','content'],
    validate // the function used for validation
};
export default reduxForm(formConfig,null,{createSomethingFromForm})(EnterInfo);

/**
 * doing the above adds the value from the fields into the global state
 * state will have a key on it called form which was defined in the reducer root
 * then there will be a key for each form entry specified "EnterInfoForm"
 * {state:form{EnterInfoForm:{title:'',categories:'',content:''}}}
 */