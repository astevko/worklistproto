// Copyright 2014 McKesson Corporation and/or one of its subsidiaries.
/**
 * 
 */
package com.mckesson.mg2.client.utils;

import com.google.gwt.event.shared.EventHandler;
import com.google.gwt.event.shared.GwtEvent;

/**
 * Use this event to display/clear the application status message and waiting
 * 
 * @author efdj6eb
 * 
 * @see AppStatusEvent
 * @see AppStatusView
 * @see AppStatusViewImpl
 * 
 */
public class AppStatusEvent extends GwtEvent<AppStatusEvent.Handler> {

	public interface Handler extends EventHandler {

		/**
		 * clear messaging
		 */
		void clear();

		/**
		 * show the loading
		 * 
		 * @param message
		 */
		void showLoading(String message);

		/**
		 * show this message
		 * 
		 * @param AppStatusLevel
		 * @param message
		 * @param isEphemeral
		 */
		void showMessage(AppStatusLevel AppStatusLevel, String message, boolean isEphemeral);
	}

	/**
	 * Handler type.
	 */
	public static Type<AppStatusEvent.Handler> TYPE = new Type<AppStatusEvent.Handler>();

	/**
	 * Gets the type associated with this event.
	 * 
	 * @return returns the handler type
	 */
	public static Type<AppStatusEvent.Handler> getType() {

		return TYPE;
	}

	/**
	 * is this message ephemeral?
	 */
	private final boolean isEphemeral;

	/**
	 * messaging AppStatusLevel
	 */
	private final AppStatusLevel appStatusLevel;

	/**
	 * Event payload is the message to display
	 */
	private final String message;

	/**
	 * clears the app status message
	 */
	public AppStatusEvent() {

		this.appStatusLevel = AppStatusLevel.CLEAR;
		this.message = "";
		this.isEphemeral = true;
	}

	/**
	 * the app to display this permanent message
	 * 
	 * @param AppStatusLevel
	 * @param message
	 * @param isEphemeral
	 *            - self clearing message?
	 */
	public AppStatusEvent(final AppStatusLevel AppStatusLevel, final String message) {

		this.appStatusLevel = AppStatusLevel;
		this.message = message;
		this.isEphemeral = false;
	}

	/**
	 * the app to display this message
	 * 
	 * @param AppStatusLevel
	 * @param message
	 * @param isEphemeral
	 *            - self clearing message?
	 */
	public AppStatusEvent(final AppStatusLevel AppStatusLevel, final String message, final boolean isEphemeral) {

		this.appStatusLevel = AppStatusLevel;
		this.message = message;
		this.isEphemeral = isEphemeral;
	}

	/**
	 * the app status to display this ephemeral info message
	 */
	public AppStatusEvent(final String message) {

		this.appStatusLevel = AppStatusLevel.INFO;
		this.message = message;
		this.isEphemeral = true;
	}

	/**
	 * 
	 * @see com.google.gwt.event.shared.GwtEvent#dispatch(com.google.gwt.event.shared.EventHandler)
	 */
	@Override
	protected void dispatch(final Handler handler) {

		switch (appStatusLevel) {
		case ERROR:
		case INFO:
		case WARN:
			handler.showMessage(appStatusLevel, message, isEphemeral);
			break;

		case LOADING:
			handler.showLoading(message);
			break;

		case CLEAR:
		default:
			handler.clear();
			break;
		}
	}

	/**
	 * 
	 * @see com.google.gwt.event.shared.GwtEvent#getAssociatedType()
	 */
	@Override
	public Type<AppStatusEvent.Handler> getAssociatedType() {

		return TYPE;
	}

	/**
	 * @return the AppStatusLevel
	 */
	public AppStatusLevel getAppStatusLevel() {

		return appStatusLevel;
	}

	/**
	 * This is the message to display - Empty message means clear
	 * 
	 * @return the message
	 */
	public String getMessage() {

		return message;
	}

	/**
	 * @return the isEphemeral
	 */
	public boolean isEphemeral() {

		return isEphemeral;
	}

}
