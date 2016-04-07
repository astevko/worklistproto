/**
 * 
 */
package com.mckesson.mg2.client.main;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.resources.client.CssResource;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.patient.PatientSearchView;
import com.vaadin.polymer.paper.widget.PaperButton;

/**
 * Login form
 * @see PatientSearchView 
 * @author efdj6eb
 *
 */
public class LoginView extends Composite {

    private static LoginViewUiBinder uiBinder = GWT.create(LoginViewUiBinder.class);

    interface LoginViewUiBinder extends UiBinder<Widget, LoginView> {
    }
    
    interface Style extends CssResource {
        String view();
    }
    @UiField HTMLPanel view; 
    @UiField PaperButton loginButton;
    
    public LoginView() {
        initWidget(uiBinder.createAndBindUi(this));
        // cheap substitute for height: 100%
        view.setHeight(Window.getClientHeight() + "px");        
        
        loginButton.addClickHandler(new ClickHandler() {
            
            public void onClick(ClickEvent event) {
                RootPanel.get().clear();
                RootPanel.get().add((Widget) GWT.create(PatientSearchView.class));
            }
        });
    }
}
    
