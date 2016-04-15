/**
 * 
 */
package com.mckesson.mg2.client;

import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.Window.ClosingEvent;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.RootPanel;
import com.google.gwt.user.client.ui.Widget;
import com.mckesson.mg2.client.patient.NavMenuView;
import com.vaadin.polymer.paper.widget.PaperToast;

/**
 * @author efdj6eb
 *
 */
public class MainView {
    private static MainView singleton;
    
    private PaperToast toast;

    private RootPanel rootPanel;

    private Widget previousView;

    private Widget currentView;
    /**
     * 
     */
    public MainView() {
        this.rootPanel = RootPanel.get();
        this.toast = new PaperToast();        
        rootPanel.add(this.toast);
        
        Window.addWindowClosingHandler(new Window.ClosingHandler() {

            @Override
            public void onWindowClosing(final ClosingEvent event) {
                event.setMessage("Do you want to end the prototype?");
            }
        });
    }
    
    public static MainView get() {
        if (singleton == null) {
            singleton = new MainView();
        }
        return singleton;
    }
    
    public void gotoView( NavMenuView panel, String toastMsg ) {
        gotoView(panel);
        panel.toast.setText(toastMsg);
        panel.toast.show();
    }

    /**
     * @param panel
     */
    public void gotoView(Widget panel) {
        if (currentView != null) {
            previousView = currentView;
//            rootPanel.remove(currentView);
//            currentView.removeFromParent();
//                rootPanel.clear();
            RootPanel.getBodyElement().removeChild(currentView.getElement());
        }        
        currentView = panel;
        rootPanel.add(currentView);
    }
    
    public void gotoBack() {
        if (previousView != null) {
            gotoView(previousView);
        }
    }
}