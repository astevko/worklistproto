/**
 * 
 */
package com.mckesson.mg2.client.patient;

import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.Timer;
import com.google.gwt.user.client.ui.Composite;
import com.vaadin.polymer.paper.widget.PaperToast;

/** 
 * View with Toast
 * @author efdj6eb
 *
 */
public class ToastedView extends Composite {

    @UiField
    public PaperToast toast;
    protected String toastMessage;

    public void triggerToast(String message) {
        this.toastMessage = message;
    }

    @Override
    protected void onLoad() {
        super.onLoad();
    
        if (toastMessage != null && !toastMessage.isEmpty()) {
            Timer timer = new Timer() {
                public void run() {
                    // display toast
                    toast.setText(toastMessage);
                    toast.show();
                }
            };
            timer.schedule(700);
        }
    
    }

}
